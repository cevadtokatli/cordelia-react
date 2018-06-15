import React from 'react';

export default class ClearColor extends React.Component {
    render() {
        return(
            <div className={"cdp-clear-color "+(this.props.isDark ? 'cdp-dark' : '')} onClick={this.props.clearColor}>
                <i className="cdp-icons"></i>
            </div>
        );
    }
}