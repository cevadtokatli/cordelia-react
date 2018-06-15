import React from 'react';
import ColorConsole from './color-console.jsx';
import Buttons from './buttons.jsx';

export default class Console extends React.Component {
    render() {
        var colorConsole = (this.props.showColorValue || this.props.allowClearColor) ? true : false;

        return(
          <div className={"cdp-console-container "+(!colorConsole ? 'cdp-color-console-non-showing' : !this.props.showColorValue ? 'cdp-current-color-non-showing' : !this.props.allowClearColor ? 'cdp-clear-color-non-showing' : '')}>
              { colorConsole &&
                <ColorConsole color={this.props.color} initialColor={this.props.initialColor} isDarkCurrent={this.props.isDarkCurrent} isDarkInitial={this.props.isDarkInitial} rgbaColor={this.props.rgbaColor} showColorValue={this.props.showColorValue} allowClearColor={this.props.allowClearColor} setColor={this.props.setColor} setInitialColorAsColor={this.props.setInitialColorAsColor} clearColor={this.props.clearColor} getRgbaValue={this.props.getRgbaValue} />
              }
              { this.props.showButtons &&
                  <Buttons save={this.props.save} cancel={this.props.cancel} />
              }
          </div>
        );
    }
}