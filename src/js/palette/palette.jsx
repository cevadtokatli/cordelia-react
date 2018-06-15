import React from 'react';
import PaletteColors from './palette-colors.jsx';
import Helper from '../helper.js';

export default class Palette extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: this.props.paletteOpen
        };
    }

    componentDidUpdate() {
        if(this.props.paletteOpen != this.state.open) {
            var open = this.props.paletteOpen;
            Helper.opacityAnimation(this.elm, open)
            .then(() => {
                this.setState({
                    open
                });
            });
        }
    }

    render() {
        return(
            <div ref={elm => this.elm = elm} className={"cdp-palette-container "+(!this.state.open ? 'cdp-hidden' : '')}>
                <hr className="cdp-palette-line" />
                <PaletteColors color={this.props.color} rgbaColor={this.props.rgbaColor} paletteColors={this.props.paletteColors} allowPaletteAddColor={this.props.allowPaletteAddColor} getRgbaValue={this.props.getRgbaValue} setColor={this.props.setColor} />
            </div>
        );
    }
}