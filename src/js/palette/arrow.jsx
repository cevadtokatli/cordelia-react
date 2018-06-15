import React from 'react';

export default class Arrow extends React.Component {
    render() {
        return(
            <div className="cdp-arrow-div">
                <i className="cdp-icons" onClick={this.props.togglePalette}></i>
            </div>
        );
    }
}