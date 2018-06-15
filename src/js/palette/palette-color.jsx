import React from 'react';

export default class PaletteColor extends React.Component {
    setColor = () => {
        var {r, g, b, a} = this.props.color;
        this.props.setColor({r, g, b, a});
    }

    render() {
        return(
            <div className="cdp-palette-element cdp-background-type-opacity">
                <div style={{background:this.props.color.value}} onClick={this.setColor}></div>
            </div>
        );
    }
}