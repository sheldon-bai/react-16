import React, { Component } from 'react'
import { A, B } from './components/common/Comps'
import withLog from './components/HOC/withLog'

const ALog = withLog(A)
const BLog = withLog(B)

export default class App extends Component {
  render() {
    return (
        <div>
            <ALog a='abcd'/>
            <BLog b='xyz'/>
        </div>
    )
  }
}
