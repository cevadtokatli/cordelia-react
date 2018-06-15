import React from 'react';

export default class PaletteAddElement extends React.Component {
    render() {
        return(
            <div className="cdp-palette-add-element" onClick={this.props.addColor}>
                <i className="cdp-icons"></i>
            </div>
        );
    }
}