import React from 'react'

export default class MyClassComp extends React.Component {
    // constructor(props) {
    //     super(props) // this.props = props
    //     console.log('props: ', props)
    //     console.log('this.props:', this.props)
    // }
    render() {
        console.log(this.props)
        if (this.props.ui) {
            return this.props.ui
        }

        return (
            <div>
                <h3>My class component: {this.props.number}</h3>
            </div>
        )
    }
}