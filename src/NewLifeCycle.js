import React, { Component } from 'react'

export default class NewLifeCycle extends Component {
    state = {
        n: this.props.n
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromPorps')
        console.log('props', props)
        console.log('state', state)

        return null
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('getSnapshotBeforeUpdate')

        return 123
    }

    componentDidUpdate = (prevProps, prevState, snap) => {
        console.log('componentDidUpdate', snap)
    }
    

    render() {
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={() => {
                        this.setState(prev => ({
                            n: prev.n + 1
                        }))
                    }}>改State：n + 1</button>
                </p>
            </div>
        )
    }
}