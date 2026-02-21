import React from 'react'

export default function Student(props) {
    return (
        <li>
            name: {props.name}
            <br/>
            email: {props.email}
            <br/>
            gender: {props.gender}
        </li>
    )
}