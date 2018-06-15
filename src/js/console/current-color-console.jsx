import React from 'react';
import ColorInput from './color-input.jsx';
import ClearColor from './clear-color.jsx';

export default class CurrentColorConsole extends React.Component {
    render() {
        var isDark = this.props.isDark;
        if(this.props.rgbaColor.a < 0.4) {
            isDark = true;
        }

        return(
            <div className="cdp-current-color-console" style={{background:(this.props.color ? this.props.color : 'transparent')}}>
                { this.props.showColorValue &&
                    <ColorInput color={this.props.color} isDark={isDark} setColor={this.props.setColor} getRgbaValue={this.props.getRgbaValue} />
                }
                { this.props.allowClearColor &&
                    <ClearColor isDark={isDark} clearColor={this.props.clearColor} />
                }
            </div>
        );
    }
}