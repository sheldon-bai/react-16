import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            n: 0
        }

        console.log('一个新的组件诞生了！！！')
    }

    UNSAFE_componentWillMount = () => {
      console.log('componentWillMount', '组件即将被挂载')
      this.setState({
        n: 3
      })
    }

    componentDidMount = () => {
      console.log('componentDidMount', '挂载完成')
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', '接收到新的属性值')
        console.log('current props: ', this.props)
        console.log('next props: ', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', '是否应该重新渲染')
        console.log('this.props', this.props)
        console.log('nextProps', nextProps)
        console.log('this.state', this.state)
        console.log('nextState', nextState)

        if (this.props.n === nextProps.n && this.state.n === nextState.n) {
            return false
        }

        return true
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', "组件即将被重新渲染")
    }

    componentDidUpdate = (prevProps, prevState) => {
      console.log('componentDidUpdate', '组件已经完成重新渲染', prevProps, prevState)
    }

    componentWillUnmount = () => {
      console.log('componentWillUnmount', '组件被销毁')
    }
    
    

    handleClick = () => {
        this.setState((prev) => ({
            n: prev.n + 1
        }))
    }
    
    
    render() {
        console.log('render', '渲染，返回到React元素会被挂载到虚拟DOM树中')
        return (
            <div>
                <h1>旧版生命周期组件</h1>
                <h2>属性n：{this.props.n}</h2>
                <h2>状态n: {this.state.n}</h2>
                <button onClick={this.handleClick}>状态n+1</button>
            </div>
        )
    }
}