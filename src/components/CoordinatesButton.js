import React, { Component } from 'react'

class CoordinatesButton extends Component {
    handleClick = (MouseEventa) => {
        const mouse = [MouseEventa.clientX, MouseEventa.clientY]
        this.props.onReceiveCoordinates(mouse)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>zdf</button>
            </div>
        )
    }
}

export default CoordinatesButton
