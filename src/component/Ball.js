import React, { Component } from 'react'
import './Ball.css'

export default class Ball extends Component {
    constructor(props) {
        super(props)
        // props.xSpeed
        // props.ySpeed
        this.state = {
            left: props.left || 0,
            top: props.top || 0,
            xSpeed: props.xSpeed,
            ySpeed: props.ySpeed,
        }

        let duration = 160

        setInterval(() => {
            const xDis = this.state.xSpeed * duration / 100
            const yDis = this.state.ySpeed * duration / 100

            let newLeft = this.state.left + xDis
            let newTop = this.state.top + yDis

            if (newLeft <= 0) {
                newLeft = 0
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
            else if(newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }

            if (newTop <= 0) {
                newTop = 0
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }
            else if(newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }

            this.setState({
                left: newLeft,
                top: newTop,
            })
        }, duration)
    }

    render() {
        return (
            <div className='ball' style={{
                left: this.state.left,
                top: this.state.top,
                background: this.props.bg || 'red',
            }}>

            </div>
        )
    }
}