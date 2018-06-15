import React from 'react';

export default class InitialColor extends React.Component {
    render() {
        return(
            <div className={"cdp-initial-color "+(this.props.isDark ? 'cdp-dark' : '')} style={{background:this.props.initialColor}} onClick={this.props.setInitialColorAsColor}>
                <i className="cdp-icons"></i>
            </div>
        );
    }
}