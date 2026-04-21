import React, { PureComponent } from 'react'

export default class AddTask extends PureComponent {
    state = {
        name: '',
    }

    onHandleAdd = () => {
        this.props.onAdd && this.props.onAdd({
            name: this.state.name,
            isFinish: false,
        })
        // this.setState({
        //     name: ''
        // })
    }

    render() {
        console.log('AddTask render')
        return (
            <div>
                <input
                    type="text" value={this.state.name}
                    onChange={e => {
                        this.setState({
                            name: e.target.value,
                        })
                    }}
                    onKeyDown={e => e.key === 'Enter' && this.onHandleAdd()}
                ></input>
                <button onClick={this.onHandleAdd}>添加任务</button>
            </div>
        )
    }
}
