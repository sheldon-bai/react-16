import React, { Component } from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'

export default class TaskContainer extends Component {
    state = {
        tasks: [],
    }

    handleAdd = newTask => {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    } 
    componentDidMount() {
        const ts = []

        for (let i = 1; i <=10; i++) {
            ts.push({
                name: `任务${i}`,
                isFinish: Math.random() > 0.5,
            })
        }

        this.setState({
            tasks: ts,
        })
    }

    render() {
        console.log('TaskContainer render, 数组长度：', this.state.tasks.length)
        return (
            <div>
                <AddTask onAdd={this.handleAdd}/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        )
    }
}