import React from 'react';
import MajorPicker from './major-picker.jsx';
import MinorPicker from './minor-picker.jsx';
import OpacityPicker from './opacity-picker.jsx';
import ColorConverter from '../color-converter.js';

export default class PickerContainer extends React.Component {
    constructor(props) {
        super(props);

        this.rgbaColor = {...this.props.rgbaColor};
        this.rgbColor = {...this.props.rgbColor};
        this.hslColor = {...this.props.hslColor};
        this.dragStatus = null;
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.pickerUpdate) {
            this.rgbaColor = {...nextProps.rgbaColor};
            if(nextProps.color) {
                this.hslColor = ColorConverter.rgbTohsl(nextProps.rgbaColor);
                this.rgbColor = this.props.getRgbaValue(`hsl(${this.hslColor.h}, 100%, 50%)`);
            } else {
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

            this.props.pickerUpdated();
        }
    }

    /**
     * This function is called when a color is chosen using the picker.
     * Sets the color.
     *
     * @param {Object} event
     * @param {String} dragStatus
     */
    pickerClicked = (event, dragStatus) => {
        this.dragStatus = dragStatus;
        document.body.classList.add('cdp-dragging-active');

        if(this.props.pickerStyle == 0 && dragStatus != 'minor' && !this.props.color) {
            this.setColorWithPosition({ x:(this.minorPicker.dragger.offsetLeft + this.props.minorPicker.subtractedValue), y:(this.minorPicker.dragger.offsetTop + this.props.minorPicker.subtractedValue) }, 'minor');
        } else if(this.props.pickerStyle == 1 && dragStatus != 'major' && !this.props.color) {
            this.setColorWithPosition({ x:(this.majorPicker.dragger.offsetLeft + this.props.majorPicker.subtractedValue), y:(this.majorPicker.dragger.offsetTop + this.props.majorPicker.subtractedValue) }, 'major');
        }

        this.toggleDraggerListeners(true);
        this.pickerMoved(event.nativeEvent);
    }

    /**
     * This function is called when the picker is moved on the palette. Takes the event object as an argument. Calls the setColorWithPosition() to set the new color.
     *
     * @param {Object} event
     */
    pickerMoved = (event) => {
        var n;

        if(this.dragStatus == 'major') {
            n = this.newPosition(event, this.majorPicker);
        } else if(this.dragStatus == 'minor') {
            n = this.newPosition(event, this.minorPicker);
        } else {
            n = this.newPosition(event, this.opacityPicker);
        }
        this.setColorWithPosition(n, this.dragStatus, true);

        event.preventDefault();
    }

    /**
     * Sets and returns the new position of the picker.
     *
     * @param {Object} event
     * @param {Object} picker
     * @returns {Object} {x: Number, y: Number}
     */
    newPosition = (event, picker) => {
        var p = picker.props.picker,
            rect = picker.container.getBoundingClientRect(),
            eX = (event.clientX) ? event.clientX : event.pageX - window.pageXOffset,
            eY = (event.clientY) ? event.clientY : event.pageY - window.pageYOffset,
            x = eX - (rect.left + p.subtractedValue),
            y = eY - (rect.top + p.subtractedValue);

        if(x < -p.subtractedValue) { x = -p.subtractedValue; } else if(x > (p.width - p.subtractedValue)) { x = p.width - p.subtractedValue; }
        if(y < -p.subtractedValue) { y = -p.subtractedValue; } else if(y > (p.height - p.subtractedValue)) { y = p.height - p.subtractedValue; }

        picker.dragger.style.left = x + 'px';
        picker.dragger.style.top = y + 'px';

        return { x:(x + p.subtractedValue), y:(y + p.subtractedValue) };
    }

    /**
     * Sets the color according to the new position.
     *
     * @param {Object} n
     * @param {String} type
     */
    setColorWithPosition = (n, type, eventCall=false) => {
        var rgb = this.rgbColor;

        if(type == 'major') {
            if(this.props.pickerStyle == 0) {
                    rgb = [rgb.r, rgb.g, rgb.b];
                var x = this.props.majorPicker.height,
                    topCV,
                    leftV,
                    leftCV,
                    netV;

                for(let i=0; i<rgb.length; i++) {
                    let v = rgb[i];
                    if(v == 255) {
                        netV = Math.abs(Math.round(((255/x) * n.y) - 255));
                    } else {
                        topCV = Math.round((x - n.y) * (v/x));
                        leftV = Math.round((x - n.x) * ((255-v)/x));
                        leftCV = Math.abs(Math.round((x - n.y) * (leftV/x)));
                        netV = topCV+leftCV;
                    }
                    rgb[i] = netV;
                }

                this.rgbaColor = {
                    r: rgb[0],
                    g: rgb[1],
                    b: rgb[2],
                    a: this.rgbaColor.a
                };

                var {r, g, b} = this.rgbaColor,
                    {h} = ColorConverter.rgbTohsl((this.rgbColor));

                this.majorPicker.backgroundElm.style.background = `hsl(${h}, 100%, 50%)`;
                if(this.props.allowOpacity) {
                    this.opacityPicker.backgroundElm.style.background = `linear-gradient(to top, rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0))`;
                }
                this.props.setDraggingColor(this.rgbaColor, eventCall);
            } else {
                var x = this.props.majorPicker.height,
                    h = Math.round(n.x * (360/x)),
                    s = Math.abs(Math.round(n.y * (100/x)) - 100);

                this.hslColor.h = h;
                this.hslColor.s = s;

                var minorX = this.minorPicker.dragger.offsetLeft + this.props.minorPicker.subtractedValue,
                    minorY = this.minorPicker.dragger.offsetTop + this.props.minorPicker.subtractedValue;

                this.setColorWithPosition({ x:minorX, y:minorY }, 'minor', eventCall);
            }
        } else if(type == 'minor') {
            if(this.props.pickerStyle == 0) {
                var x = this.props.minorPicker.height,
                    h = Math.round(n.y * (360/x));

                rgb = this.props.getRgbaValue(`hsl(${h}, 100%, 50%)`);
                this.rgbColor = rgb;
                this.hslColor.h = h;

                var majorX = this.majorPicker.dragger.offsetLeft + this.props.majorPicker.subtractedValue,
                    majorY = this.majorPicker.dragger.offsetTop + this.props.majorPicker.subtractedValue;

                this.setColorWithPosition({ x:majorX, y:majorY }, 'major', eventCall);
            } else {
                var x = this.props.minorPicker.height,
                    l = Math.abs(Math.round(n.y * (100/x)) - 100),
                    {r, g, b} = this.props.getRgbaValue(`hsl(${this.hslColor.h}, ${this.hslColor.s}%, ${l}%)`);

                this.hslColor.l = l;
                this.rgbaColor = {
                    r: r,
                    g: g,
                    b: b,
                    a: this.rgbaColor.a
                };

                var {h, s} = this.hslColor;

                this.minorPicker.backgroundElm.style.background = `linear-gradient(to bottom, hsl(0, 100%, 100%), hsl(${h}, ${s}%, 50%), hsl(0, 0%, 0%))`
                if(this.props.allowOpacity) {
                    this.opacityPicker.backgroundElm.style.background = `linear-gradient(to top, rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0))`;
                }
                this.props.setDraggingColor(this.rgbaColor, eventCall);
            }
        } else if(type == 'opacity') {
            var {r, g, b} = this.rgbaColor,
                x = this.props.opacityPicker.height,
                a = Math.round((100/x) * n.y) / 100;

            this.rgbaColor = {r, g, b, a};
            var {h, s} = this.hslColor;

            if(this.props.pickerStyle == 0) {
                this.majorPicker.backgroundElm.style.background = `hsl(${h}, 100%, 50%)`
            } else {
                this.minorPicker.backgroundElm.style.background = `linear-gradient(to bottom, hsl(0, 100%, 100%), hsl(${h}, ${s}%, 50%), hsl(0, 0%, 0%))`;
            }
            this.opacityPicker.backgroundElm.style.background = `linear-gradient(to top, rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0))`;
            this.props.setDraggingColor(this.rgbaColor, eventCall);
        }
    }

    /**
     * Ends the dragging.
     */
    pickerReleased = () => {
        document.body.classList.remove('cdp-dragging-active');
        this.props.setColor(this.rgbaColor, false);
        this.toggleDraggerListeners(false);
    }

    /**
     * Toggles dragger listeners according to status.
     *
     * @param {Boolean} status
     */
    toggleDraggerListeners = (status) => {
        if(status) {
            document.addEventListener('mousemove', this.pickerMoved);
            document.addEventListener('touchmove', this.pickerMoved);
            document.addEventListener('mouseup', this.pickerReleased);
            document.addEventListener('touchend', this.pickerReleased);
        } else {
            document.removeEventListener('mousemove', this.pickerMoved);
            document.removeEventListener('touchmove', this.pickerMoved);
            document.removeEventListener('mouseup', this.pickerReleased);
            document.removeEventListener('touchend', this.pickerReleased);
        }
    }

    render() {
        return(
            <div className="cdp-picker-container">
                <MajorPicker ref={elm => this.majorPicker = elm} color={this.props.color} rgbaColor={this.rgbaColor} rgbColor={this.rgbColor} hslColor={this.hslColor} isDark={this.props.isDark} picker={this.props.majorPicker} pickerStyle={this.props.pickerStyle} pickerClicked={this.pickerClicked} pickerUpdate={this.props.pickerUpdate} />
                <MinorPicker ref={elm => this.minorPicker = elm} color={this.props.color} rgbaColor={this.rgbaColor} hslColor={this.hslColor} isDark={this.props.isDark} picker={this.props.minorPicker} pickerStyle={this.props.pickerStyle} pickerClicked={this.pickerClicked} pickerUpdate={this.props.pickerUpdate} />
                { this.props.allowOpacity &&
                    <OpacityPicker ref={elm => this.opacityPicker = elm} color={this.props.color} rgbaColor={this.rgbaColor} isDark={this.props.isDark} picker={this.props.opacityPicker} pickerClicked={this.pickerClicked} pickerUpdate={this.props.pickerUpdate} />
                }
            </div>
        );
    }
}