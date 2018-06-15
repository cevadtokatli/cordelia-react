import React from 'react';
import InitialColor from './initial-color.jsx';
import CurrentColorConsole from './current-color-console.jsx';

export default class ColorConsole extends React.Component {
    render() {
        return(
            <div className="cdp-color-console-container cdp-background-type-opacity">
                { this.props.showColorValue &&
                    <InitialColor initialColor={this.props.initialColor} isDark={this.props.isDarkInitial} setInitialColorAsColor={this.props.setInitialColorAsColor} />
                }
                <CurrentColorConsole color={this.props.color} isDark={this.props.isDarkCurrent} rgbaColor={this.props.rgbaColor} showColorValue={this.props.showColorValue} allowClearColor={this.props.allowClearColor} setColor={this.props.setColor} clearColor={this.props.clearColor} getRgbaValue={this.props.getRgbaValue} />
            </div>
        );
    }
}