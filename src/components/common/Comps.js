import React, { Component } from 'react'

export class A extends Component {
    render() {
        return (
            <h1>{this.props.a}</h1>
        )
    }
}

export class B extends Component {
    render() {
        return (
            <h1>{this.props.b}</h1>
        )
    }
} 