import React from 'react';

export default class ColorInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: this.props.color
        };
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.color != nextProps.color) {
            this.setState({
                color: (nextProps.color) ? nextProps.color : ''
            });
        }
    }

    keyDown = (e) => {
        if(e.keyCode == 13) {
            this.changedValue(e);
        }
    }

    changedValue = (e) => {
        if(this.state.color.trim() != '' && this.state.color != this.props.color) {
            var rgba = this.props.getRgbaValue(this.state.color);
            this.props.setColor(rgba);
        }
    }

    onChange = (e) => {
        this.setState({
            color: e.target.value
        });
    }

    render() {
        return(
            <input type="text" spellCheck={false} className={"cdp-current-color "+(this.props.isDark ? 'cdp-dark' : '')} value={(this.state.color ? this.state.color : '')} onChange={this.onChange} onKeyDown={this.keyDown} onBlur={this.changedValue} />
        );
    }
}