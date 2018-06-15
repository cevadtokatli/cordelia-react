import React from 'react';

export default class OpacityPicker extends React.Component {
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
            var top = Math.round(((this.props.picker.height) / 100) * (this.props.rgbaColor.a * 100)) - this.props.picker.subtractedValue;
        } else {
            var top = this.props.picker.height - this.props.picker.subtractedValue;
        }

        this.dragger.style.left = left + 'px';
        this.dragger.style.top = top + 'px';
    }

    render() {
        var isDark = this.props.isDark;
        if(this.props.rgbaColor.a < 0.25) {
            isDark = true;
        }

        var { r, g, b, a } = this.props.rgbaColor;
        if(!this.props.color) {
            r = 255;
            g = 255;
            b = 255;
        }

        return(
            <div ref={elm => this.container = elm} className="cdp-opacity-picker" onMouseDown={(e) => this.props.pickerClicked(e, 'opacity')} onTouchStart={(e) => this.props.pickerClicked(e, 'opacity')}>
                <div className="cdp-opacity-picker-gradient cdp-background-type-opacity">
                    <div ref={elm => this.backgroundElm = elm} className="cdp-opacity-picker-gradient cdp-gradient-type-bt-current-color cdp-last-gradient-child" style={{background:`linear-gradient(to top, rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0))`}}>
                        <div ref={elm => this.dragger = elm} className={"cdp-opacity-dragger "+(isDark ? 'cdp-dark' : '')} />
                    </div>
                </div>
            </div>
        );
    }
}