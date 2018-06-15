import React from 'react';
import PaletteAddElement from './palette-add-element.jsx';
import PaletteColor from './palette-color.jsx';

export default class PaletteColors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: []
        };
    }

    componentDidMount() {
        var colors = [];

        this.props.paletteColors.forEach(i => {
            let {r, g, b, a} = this.props.getRgbaValue(i),
                value = `rgba(${r}, ${g}, ${b}, ${a})`;
            colors.push({
                value,
                r,
                g,
                b,
                a
            });
        });

        this.setState({
            colors
        });
    }

    /**
     * Adds a color to the palette.
     */
    addColor = () => {
        // if color is not null
        if(this.props.color) {
            var { r, g, b, a } = this.props.rgbaColor,
                value = `rgba(${r}, ${g}, ${b}, ${a})`,
                p = this.state.colors.find(i => i.value == value);

            if(!p) {
                // Color doesn't exit in the palette.
                this.setState({
                    colors: [
                        ...this.state.colors,
                        {
                            value,
                            r,
                            g,
                            b,
                            a
                        }
                    ]
                });
            }
        }
    }

    render() {
        return(
            <div className="cdp-palette">
                { this.props.allowPaletteAddColor &&
                    <PaletteAddElement addColor={this.addColor} />
                }
                { this.state.colors.map(i => {
                  return(<PaletteColor key={i.value} color={i} setColor={this.props.setColor} />)
                })}
            </div>
        );
    }
}