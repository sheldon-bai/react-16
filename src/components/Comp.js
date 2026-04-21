import React, { Component } from 'react'

class A extends Component {
    method() {
        console.log('调用了组件A的方法')
    }
    render() {
        return <h1>组件A</h1>
    }
}

function B() {
    return (
        <h1>Comp B</h1>
    )
}

export default class Comp extends Component {
    constructor(props) {
        super(props)
        this.txt = React.createRef()
        console.log(this.txt)
    }
    
    state = {
        show: true
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show,
        })
        // this.txt.current.focus()
        // this.abc.focus()
    }

    componentDidMount() {
        console.log('in DidMount', this.abc)
    }

    getRef = el => {
        console.log("函数被调用了", el)
        this.abc = el
    }

    render() {
        return (
            <div>
                {/* <input ref={this.txt} type="text"></input> */}
                {/* <input ref={el => {
                    console.log("函数被调用了", el)
                    this.abc = el
                }} type="text"></input> */}
                {
                    this.state.show && <input id="test" ref={this.getRef} type="text"></input>
                }
                {/* <input type="text" ref={this.getRef}></input> */}
                <button onClick={this.handleClick}>显示/隐藏</button>
            </div>
        )
    }
}