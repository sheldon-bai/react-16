import React, { Component } from 'react'
import { getRandom } from '../utils'
import Ball from './Ball'

export default class Balls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ballInfos: [],
    }

    const timer = setInterval(() => {

      if (this.state.ballInfos.length === 2) {
        clearInterval(timer)
      }
      const newBall = {
        left: getRandom(0, document.documentElement.clientWidth - 100),
        top: getRandom(0, document.documentElement.clientHeight - 100),
        xSpeed: getRandom(50, 100),
        ySpeed: getRandom(50, 100),
        bg: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`,
      }

      this.setState({
        ballInfos: [...this.state.ballInfos, newBall]
      })
    }, 1000)
  }

  render() {
    const balls = this.state.ballInfos.map((item, i) => <Ball key={i} {...item}/>)

    return (
      <>{balls}</>
      // <div>Balls</div>
    )
  }
}
