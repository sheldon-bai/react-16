import React, { Component } from 'react'

export default class Comp extends Component {
    handleClick = () => {

    }
    render() {
        return (
            <div>
                <input type="text" />
                <button onClick={this.handleClick}>Focus</button>
            </div>
        )
    }
}