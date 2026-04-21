import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Task.css'

export default class Task extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        isFinish: PropTypes.bool.isRequired,
    }

    render() {
        console.log('Task render')
        return (
            <li className={this.props.isFinish ? 'finish' : ''}>{this.props.name}</li>
        )
    }
}