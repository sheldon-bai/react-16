import React, { Component } from 'react'
import Student from './Student'

export default class Students extends Component {
    render() {
        const studentList = this.props.stus.map(stu => (
            <Student key={stu.id} {...stu}></Student>
        ))

        return (
            <ul>
                {studentList}
            </ul>
        )
    }
}