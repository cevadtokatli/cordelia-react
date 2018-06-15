import React from 'react';

export default class Buttons extends React.Component {
    render() {
        return(
            <div className="cdp-button-container">
                <div className="cdp-button" cdp-function="save" onClick={this.props.save}>
                    <i className="cdp-icons"></i>
                    SAVE
                </div>
                <div className="cdp-button" cdp-function="cancel" onClick={this.props.cancel}>
                    <i className="cdp-icons"></i>
                    CANCEL
                </div>
            </div>
        );
    }
}