import React from 'react';

export default class MinorPicker extends React.Component {
    componentDidMount() {
        this.setPosition();
    }

    componentDidUpdate() {
        if(this.props.pickerUpdate) {
            this.setPosition();
        }
    }

    /**
     * Sets the position of the picker according to the color.
     */
    setPosition = () => {
        var left = (this.props.picker.width - (this.props.picker.subtractedValue * 2)) / 2;

        if(this.props.color) {
            if(this.props.pickerStyle == 0) {
                var top = (Math.round(((this.props.picker.height) / 360) * this.props.hslColor.h)) - this.props.picker.subtractedValue;
            } else {
                var y = this.props.picker.height,
                    top = (Math.abs(Math.round(((y/100) * this.props.hslColor.l) - y))) - this.props.picker.subtractedValue;
            }
        } else {
            var top = this.props.picker.subtractedValue * -1;
        }

        this.dragger.style.left = left + 'px';
        this.dragger.style.top = top + 'px';
    }

    render() {
        var {h, s} = this.props.hslColor;
        if(!this.props.color) {
            h = 0;
            s = 100;
        }

        return(
            <div ref={elm => this.container = elm} className="cdp-minor-picker" onMouseDown={(e) => this.props.pickerClicked(e, 'minor')} onTouchStart={(e) => this.props.pickerClicked(e, 'minor')}>
                { this.props.pickerStyle == 0 &&
                    <div className="cdp-minor-picker-gradient cdp-gradient-type-tb-colorful cdp-last-gradient-child">
                        <div ref={elm => this.dragger = elm} className="cdp-minor-dragger" />
                    </div>
                } { this.props.pickerStyle == 1 &&
                    <div ref={elm => this.backgroundElm = elm} className="cdp-minor-picker-gradient cdp-gradient-type-bt-white-current-color-black cdp-last-gradient-child" style={{background:`linear-gradient(to bottom, hsl(0, 100%, 100%), hsl(${h}, ${s}%, 50%), hsl(0,0%,0%))`}}>
                        <div ref={elm => this.dragger = elm} className={"cdp-minor-dragger "+(this.props.isDark ? 'cdp-dark' : '')} />
                    </div>
                }
            </div>
        );
    }
}