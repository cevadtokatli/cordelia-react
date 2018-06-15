import React from 'react';

export default class MajorPicker extends React.Component {
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
        if(this.props.color) {
            if(this.props.pickerStyle == 0) {
                var {r, g, b} = this.props.rgbaColor,
                    x = this.props.picker.height,
                    maxColor = Math.max(r,g,b),
                    topCV = Math.abs(Math.round(((x/255) * maxColor) - x)),
                    minColor = Math.min(r,g,b),
                    leftV = Math.abs(Math.round(((x/255) * minColor) - x)),
                    leftCV = leftV - Math.abs(Math.round((topCV/maxColor) * minColor)),
                    left = leftCV - this.props.picker.subtractedValue,
                    top = topCV - this.props.picker.subtractedValue;
            } else {
                var {h, s, l} = this.props.hslColor,
                    x = this.props.picker.height,
                    leftCV = Math.round((x/360) * h),
                    topCV = Math.abs(Math.round(((x/100) * s) - x)),
                    left = leftCV - this.props.picker.subtractedValue,
                    top = topCV - this.props.picker.subtractedValue;
            }
        } else {
            var value = this.props.picker.subtractedValue * -1,
                left = value,
                top = value;
        }

        this.dragger.style.left = left + 'px';
        this.dragger.style.top = top + 'px';
    }

    render() {
        return(
            <div ref={elm => this.container = elm} className="cdp-major-picker" onMouseDown={(e) => this.props.pickerClicked(e, 'major')} onTouchStart={(e) => this.props.pickerClicked(e, 'major')}>
                { this.props.pickerStyle == 0 &&
                    <div ref={elm => this.backgroundElm = elm} className="cdp-major-picker-gradient cdp-background-type-current-color" style={{background:`hsl(${this.props.hslColor.h}, 100%, 50%)`}}>
                        <div className="cdp-major-picker-gradient cdp-gradient-type-lr-white">
                            <div className="cdp-major-picker-gradient cdp-gradient-type-bt-black cdp-last-gradient-child">
                                <div ref={elm => this.dragger = elm} className={"cdp-major-dragger "+(this.props.isDark ? 'cdp-dark' : '')} />
                            </div>
                        </div>
                    </div>
                } { this.props.pickerStyle == 1 &&
                    <div className="cdp-major-picker-gradient cdp-gradient-type-lr-colorful">
                        <div className="cdp-major-picker-gradient cdp-gradient-type-bt-gray cdp-last-gradient-child">
                            <div ref={elm => this.dragger = elm} className="cdp-major-dragger" />
                        </div>
                    </div>
                }
            </div>
        );
    }
}