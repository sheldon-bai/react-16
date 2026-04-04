import React from 'react'

export default function Comp(props) {
    console.log(props)
    return (
        <div>
            <p>组件自身的内容</p>
            {props.children || <i>Default value</i>}
        </div>
    )
}