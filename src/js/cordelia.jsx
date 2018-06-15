import React from 'react';
import PropTypes from 'prop-types';
import 'es6-promise/auto';
import PickerContainer from './picker/picker-container.jsx';
import Console from './console/console.jsx';
import Arrow from './palette/arrow.jsx';
import Palette from './palette/palette.jsx';
import ColorConverter from './color-converter.js';
import Helper from './helper.js';

class Cordelia extends React.Component {
    constructor(props) {
        super(props);

        // Stores elements.
        this.ref = {};

        // size
        this.size = this.props.size;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && !this.props.embed) {
            this.size = 'small';
        }

        // picker sizes
        this.majorPicker = {};
        this.minorPicker = {};
        this.opacityPicker = {};

        if(this.size == 'small') {
            this.majorPicker.width = 125;
            this.majorPicker.height = 125;
            this.minorPicker.width = 20;
            this.minorPicker.height = 125;
        } else if(this.size == 'medium') {
            this.majorPicker.width = 175;
            this.majorPicker.height = 175;
            this.minorPicker.width = 30;
            this.minorPicker.height = 175;
        } else {
            this.majorPicker.width = 250;
            this.majorPicker.height = 250;
            this.minorPicker.width = 30;
            this.minorPicker.height = 250;
        }
        this.majorPicker.subtractedValue = 9;
        this.minorPicker.subtractedValue = 7;

        if(this.props.allowOpacity) {
            this.opacityPicker.width = this.minorPicker.width;
            this.opacityPicker.height = this.minorPicker.height;
            this.opacityPicker.subtractedValue = this.minorPicker.subtractedValue;
        }

        this.state = {
            initialized: false,
            pickerUpdate: false,
            pickerOpen: this.props.embed,
            paletteOpen: false
        };

        this.closePicker = this.closePicker.bind(this);
        this.setPosition = this.setPosition.bind(this);
    }

    componentDidMount() {
        var color = this.props.color,
            initialColor,
            isDark,
            rgbaColor = {}; //Holds RGBA values of the current color
        rgbaColor.a = 1;

        this.rgbColor = {};  //Holds the latest RGB value to calculate the new value when the picker position is changed on the palette
        this.hslColor = {}; //Holds the latest HSL value to calculate the new value when the picker position is changed on the palette

        if(!color && !this.props.allowClearColor) {
            if(this.props.colorFormat == 'hex') { color = '#FF000'; }
            else if(this.props.colorFormat == 'rgb') { color = 'rgb(255,0,0)'; }
            else if(this.props.colorFormat == 'rgba') { color = 'rgba(255,0,0,1)'; }
            else if(this.props.colorFormat == 'hsl') { color = 'hsl(0,100%,50%)'; }
            else if(this.props.colorFormat == 'hsla') { color = 'hsla(0,100%,50%,1)'; }
        }

        if(color) {
            rgbaColor = this.getRgbaValue(color);
            color = this.convertColor(rgbaColor).value;
            var hsl = ColorConverter.rgbTohsl(rgbaColor),
                rgb = this.getRgbaValue(`hsl(${hsl.h}, 100%, 50%)`);
            isDark = Helper.isDark(rgbaColor);
            this.rgbColor = rgb;
            this.hslColor = hsl;
        } else {
            isDark = true;
            this.rgbColor = {
                r: 255,
                g: 0,
                b: 0
            };
            this.hslColor = {
                h: 0,
                s: 0,
                l: 0
            };
        }
        initialColor = color;

        this.color = color;
        this.rgbaColor = rgbaColor;
        this.setState({
            initialized: true,
            color,
            initialColor,
            rgbaColor,
            isDarkCurrent: isDark,
            isDarkInitial: (rgbaColor.a < 0.4) ? true : isDark,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.initialized && !prevState.initialized) {
            this.ref.currentColorConsole = this.ref.container.querySelector('.cdp-current-color-console');
            this.ref.colorInput = this.ref.container.querySelector('.cdp-current-color');
            this.ref.clearColor = this.ref.container.querySelector('.cdp-clear-color');
        }
    }

    /**
     * Converts any color type to RGBA with getComputedStyle.
     *
     * @param {String} color
     * @retuns {Object}
     */
    getRgbaValue = (color) => {
        this.ref.rgbaColor.style.background = color;

        var backgroundValue = window.getComputedStyle(this.ref.rgbaColor, false, null).getPropertyValue('background-color'),
            rgba = backgroundValue.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');

        return {
            r: parseInt(rgba[0]),
            g: parseInt(rgba[1]),
            b: parseInt(rgba[2]),
            a: (rgba[3]) ? parseFloat(rgba[3]) : 1
        };
    }

    /**
     * Converts and returns the current color according to the selected format that user chose.
     *
     * @param {Object} rgba
     * @returns {Object}
     */
    convertColor = (rgba) => {
        var {r, g, b, a} = rgba;

        if(a == 1 || !this.props.allowOpacity) {
            if(this.props.colorFormat == 'hex') {
                return {
                    value: ColorConverter.rgbTohex({r, g, b})
                };
            } else if(this.props.colorFormat == 'rgb') {
                return {
                    value:`rgb(${r}, ${g}, ${b})`, r, g, b
                };
            } else if(this.props.colorFormat == 'rgba') {
                return {
                    value:`rgba(${r}, ${g}, ${b}, 1)`, r, g, b, a:1
                };
            } else {
                var {h, s, l} = ColorConverter.rgbTohsl({r, g, b});
                if(this.props.colorFormat == 'hsl') {
                    return {
                        value:`hsl(${h}, ${s}%, ${l}%)`, h, s, l
                    };
                } else {
                    return {
                        value:`hsla(${h}, ${s}%, ${l}%, 1)`, h, s, l, a:1
                    };
                }
            }
        } else {
            if(this.props.colorFormat != 'hsl' && this.props.colorFormat != 'hsla') {
                return {
                    value:`rgba(${r}, ${g}, ${b}, ${a})`, r, g, b, a
                };
            } else {
                var {h, s, l} = ColorConverter.rgbTohsl({r, g, b});
                return {
                    value:`hsla(${h}, ${s}%, ${l}%, ${a})`, h, s, l, a
                };
            }
        }
    }

    /**
     * Sets new color.
     *
     * @param {Object} rgba
     * @param {Boolean} pickerUpdate
     */
    setColor = (rgba, pickerUpdate=true) => {
         var color = this.convertColor(rgba),
             isDark = Helper.isDark(rgba);

        if(this.state.color != color.value) {
            this.color = color.value;
            this.rgbaColor = rgba;
            this.setState({
                color: color.value,
                rgbaColor: rgba,
                isDarkCurrent: isDark,
                pickerUpdate
            });

            if(pickerUpdate) {
                this.props.onChanged();
            }
        }
    }

    /**
     * Changes the color without setting the current color during the dragging process.
     *
     * Notes :
     * Dragging the picker on the palette changes the state constantly. React renders its components every time the state changes. This constant rendering causes freezing on MS Edge and IE.
     * Therefore, I had to change the CSS manually without changing the state during dragging to prevent React to render components. The state is changed only once when the dragging is completed.
     * So React renders the components when the dragging is completed.
     *
     * @param {Object} rgba
     */
    setDraggingColor = (rgba, eventCall) => {
        var {a} = rgba,
            color = this.convertColor(rgba),
            isDark = Helper.isDark(rgba);

        if(this.color != color.value) {
            this.color = color.value;
            this.rgbaColor = rgba;

            if(!this.props.embed) {
                this.ref.wrapper.style.background = color.value;
            }

            if(this.props.pickerStyle == 0) {
                if(isDark) {
                    this.ref.picker.majorPicker.dragger.classList.add('cdp-dark');
                } else {
                    this.ref.picker.majorPicker.dragger.classList.remove('cdp-dark');
                }
            } else {
                if(isDark) {
                    this.ref.picker.minorPicker.dragger.classList.add('cdp-dark');
                } else {
                    this.ref.picker.minorPicker.dragger.classList.remove('cdp-dark');
                }
            }

            if(this.props.allowOpacity) {
                if(isDark || a < 0.25) {
                    this.ref.picker.opacityPicker.dragger.classList.add('cdp-dark');
                } else {
                    this.ref.picker.opacityPicker.dragger.classList.remove('cdp-dark');
                }
            }

            if(this.ref.currentColorConsole) {
                this.ref.currentColorConsole.style.background = color.value;

                if(this.ref.colorInput) {
                    this.ref.colorInput.value = color.value;

                    if(isDark || a < 0.4) {
                        this.ref.colorInput.classList.add('cdp-dark');
                    } else {
                        this.ref.colorInput.classList.remove('cdp-dark');
                    }
                }

                if(this.ref.clearColor) {
                    if(isDark || a < 0.4) {
                        this.ref.clearColor.classList.add('cdp-dark');
                    } else {
                        this.ref.clearColor.classList.remove('cdp-dark');
                    }
                }
            }

            if(eventCall) {
                this.props.onChanged();
            }
        }
    }

    /**
     * Clears the color.
     */
    clearColor = () => {
        if(this.state.color) {
            var rgbaColor = {
                r: 255,
                g: 255,
                b: 255,
                a: 1
            };

            this.color = null;
            this.rgbaColor = rgbaColor;
            this.setState({
                color: null,
                rgbaColor,
                isDarkCurrent: true,
                pickerUpdate: true
            });
            this.props.onChanged();
        }
    }

    /**
     * Sets the initial color as current color.
     */
    setInitialColorAsColor = () => {
        if(this.state.color != this.state.initialColor) {
            if(this.state.initialColor) {
                var rgba = this.getRgbaValue(this.state.initialColor);
                this.setColor(rgba);
            } else {
                this.clearColor();
            }
        }
    }

    /**
     * It is called when picker is updated.
     */
    pickerUpdated = () => {
        this.setState({
            pickerUpdate: false
        });
    }

    /**
     * Shows the color picker.
     */
    openPicker = () => {
        if(!this.state.pickerOpen && !this.animationProcessing) {
            this.animationProcessing = true;

            if(!this.props.embed) {
                this.ref.container.classList.add('cdp-visibility-hidden');
                var {pickerRight, pickerBottom } = this.setPosition();
                this.ref.container.classList.remove('cdp-visibility-hidden');

                if(!this.props.embed) {
                    window.addEventListener('resize', this.setPosition, true);

                    if(!this.props.showButtons) {
                        document.addEventListener('mousedown', this.closePicker, true);
                        document.addEventListener('touchstart', this.closePicker, true);
                    }
                }
            }

            this.props.onOpen();

            Helper.opacityAnimation(this.ref.container, true)
            .then(() => {
                this.animationProcessing = false;
                this.setState({
                    pickerOpen: true,
                    pickerRight,
                    pickerBottom
                });
            });
        }
    }

    /**
     * Hides the picker if the click target is not the picker itself.
     *
     * @param {Object} event
     * @param {Boolean} pass
     */
    closePicker(event, pass=false) {
        if(((event && !this.ref.container.contains(event.target)) || pass) && !this.animationProcessing) {
            this.animationProcessing = true;

            if(!this.props.embed) {
                window.removeEventListener('resize', this.setPosition, true);

                if(!this.props.showButtons) {
                    document.removeEventListener('mousedown', this.closePicker, true);
                    document.removeEventListener('touchstart', this.closePicker, true);
                }
            }

            this.props.onClose();

            Helper.opacityAnimation(this.ref.container, false)
            .then(() => {
                this.animationProcessing = false;
                this.setState({
                    pickerOpen: false
                });
            });
        }
    }

    /**
     * Set the picker's position
     */
    setPosition() {
        var rect = this.ref.main.getBoundingClientRect(),
            left = rect.left + window.pageXOffset,
            top = rect.top + window.pageYOffset,
            x = left + this.ref.container.offsetWidth + 10,
            _x = left - this.ref.container.offsetWidth,
            y = top + this.ref.container.offsetHeight + 40,
            _y = top - (this.ref.container.offsetHeight + 10),
            w = window.innerWidth + window.pageXOffset,
            h = window.innerHeight + window.pageYOffset,
            pickerRight = false,
            pickerBottom = false;

        if (x >= w && _x > 0) {
            this.ref.container.classList.add('cdp-right');
            pickerRight = true;
        } else {
            this.ref.container.classList.remove('cdp-right');
        }

        if (y >= h && _y > 0) {
            this.ref.container.classList.add('cdp-bottom');
            pickerBottom = true;
        } else {
            this.ref.container.classList.remove('cdp-bottom');
        }

        return {
            pickerRight,
            pickerBottom
        };
    }

    /**
     * Toggles palette.
     */
    togglePalette = () => {
        this.setState({
            paletteOpen: !this.state.paletteOpen
        });
    }

    /**
     * Returns the current color.
     *
     * @returns {String}
     */
    get = () => {
        return (this.color == null) ? {value:null} : this.convertColor(this.rgbaColor);
    }

    /**
     * Sets a new color.
     *
     * @param {String} newColor
     */
    set = (newColor) => {
        if(!newColor && this.props.allowClearColor) {
            this.clearColor();
        } else if(!newColor) {
            newColor = this.state.color;
        } else {
            var rgba = this.getRgbaValue(newColor);
            this.setColor(rgba);
        }
    }

    /**
     * Shows the picker.
     */
    show = () => {
        this.openPicker();
    }

    /**
     * Hides the picker.
     */
    hide = () => {
        if(this.state.pickerOpen) {
            this.closePicker(null, true);
        }
    }

    /**
     * Sets current color as initial color and fires the save callback.
     */
    save = () => {
        this.setState({
            initialColor: this.state.color,
            isDarkInitial: (this.state.rgbaColor.a < 0.4) ? true : this.state.isDarkCurrent
        });

        if(!this.props.embed) {
            this.hide();
        }

        this.props.onSave();
    }

    /**
     * Sets initial color as current color and fires the cancel callback.
     */
    cancel = () => {
        this.setInitialColorAsColor();

        if(!this.props.embed) {
            this.hide();
        }

        this.props.onCancel();
    }

    render() {
        if(!this.state.initialized) {
            return(<div ref={elm => this.ref.rgbaColor = elm} key={false} className="cdp-hidden"></div>);
        }

        var rgbaValue = <div ref={elm => this.ref.rgbaColor = elm} className="cdp-hidden"></div>,
            pickerContainer = <PickerContainer ref={elm => this.ref.picker = elm} color={this.state.color} rgbaColor={this.state.rgbaColor} rgbColor={this.rgbColor} hslColor={this.hslColor} isDark={this.state.isDarkCurrent} pickerStyle={this.props.pickerStyle} showColorValue={this.props.showColorValue} allowOpacity={this.props.allowOpacity} majorPicker={this.majorPicker} minorPicker={this.minorPicker} opacityPicker={this.opacityPicker} setColor={this.setColor} setDraggingColor={this.setDraggingColor} getRgbaValue={this.getRgbaValue} pickerUpdate={this.state.pickerUpdate} pickerUpdated={this.pickerUpdated} />,
            consoleC = (this.props.showColorValue || this.props.allowClearColor || this.props.showButtons) ? <Console color={this.state.color} initialColor={this.state.initialColor} isDarkCurrent={this.state.isDarkCurrent} isDarkInitial={this.state.isDarkInitial} rgbaColor={this.state.rgbaColor} showColorValue={this.props.showColorValue} allowClearColor={this.props.allowClearColor} showButtons={this.props.showButtons} setColor={this.setColor} clearColor={this.clearColor} setInitialColorAsColor={this.setInitialColorAsColor} getRgbaValue={this.getRgbaValue} save={this.save} cancel={this.cancel} /> : '',
            arrow = (this.props.showPalette) ? <Arrow togglePalette={this.togglePalette} /> : '',
            palette = (this.props.showPalette) ? <Palette color={this.state.color} rgbaColor={this.state.rgbaColor} paletteColors={this.props.paletteColors} allowPaletteAddColor={this.props.allowPaletteAddColor} getRgbaValue={this.getRgbaValue} setColor={this.setColor} paletteOpen={this.state.paletteOpen} /> : '';

        if(this.props.embed) {
            return(
                <div ref={elm => this.ref.container = elm} className="cdp-container" cdp-size={this.size}>
                    {rgbaValue}
                    {pickerContainer}
                    {consoleC}
                    {arrow}
                    {palette}
                </div>
            );
        } else {
            return(
                <div ref={elm => this.ref.main = elm} className="cdp-wrapper cdp-background-type-opacity" onClick={this.openPicker}>
                    <div ref={elm => this.ref.wrapper = elm} className="cdp-wrapper-overlay" style={{background:this.state.color}}>
                        <div ref={elm => this.ref.container = elm} className={"cdp-container "+(!this.state.pickerOpen ? 'cdp-hidden' : '')+' '+(this.state.pickerRight ? 'cdp-right' : '')+' '+(this.state.pickerBottom ? 'cdp-bottom' : '')} cdp-size={this.size}>
                            {rgbaValue}
                            {pickerContainer}
                            {consoleC}
                            {arrow}
                            {palette}
                        </div>
                    </div>
                </div>

            );
        }
    }
}

Cordelia.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    embed: PropTypes.bool,
    pickerStyle: PropTypes.oneOf([0, 1]),
    allowOpacity: PropTypes.bool,
    allowClearColor: PropTypes.bool,
    showColorValue: PropTypes.bool,
    colorFormat: PropTypes.oneOf(['hex', 'rgb', 'rgba', 'hsl', 'hsla']),
    color: PropTypes.string,
    showButtons: PropTypes.bool,
    showPalette: PropTypes.bool,
    paletteColors: PropTypes.array,
    allowPaletteAddColor: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    onChanged: PropTypes.func
};

Cordelia.defaultProps = {
    size: 'medium',
    embed: true,
    pickerStyle: 0,
    allowOpacity: true,
    allowClearColor: false,
    showColorValue: true,
    colorFormat: 'hex',
    color: '#FF0000',
    showButtons: true,
    showPalette: true,
    paletteColors: ['#FFFFB5', '#FBBD87', '#F45151', '#7AEA89', '#91C8E7', '#8EB4E6', '#B0A7F1'],
    allowPaletteAddColor: true,
    onOpen: () => {},
    onClose: () => {},
    onSave: () => {},
    onCancel: () => {},
    onChanged: () => {}
};

export default Cordelia;