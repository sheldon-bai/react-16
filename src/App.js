import React, { Component } from 'react'
// import OldLifeCycle from './OldLifeCycle'
import NewLifeCycle from './NewLifeCycle'

export default class App extends Component {
    state = {
        number: 1,
        show: true,
    }

    render() {
        // const comp = this.state.show ? <OldLifeCycle n={this.state.number} /> : null
        const comp = <NewLifeCycle n={this.state.number}/>

        return (
            <div>
                {comp}
                <button onClick={() => {
                    this.setState(state => ({
                        number: state.number + 1
                    }))
                }}>父组件， 改props：n + 1</button>
                {/* <button onClick={() => {
                    this.setState(prev => ({
                        show: !prev.show
                    }))
                }}>show/hide</button> */}
            </div>
        )
    }
}