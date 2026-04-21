import React, { PureComponent } from 'react'
// import React from 'react'
import PropTypes from 'prop-types'
import './Task.css'
// import { ObjectEqual } from '../utils/helper'

// export default class Task extends PureComponent {
// // export default class Task extends Component {
//     static propTypes = {
//         name: PropTypes.string.isRequired,
//         isFinish: PropTypes.bool.isRequired,
//     }

//     // shouldComponentUpdate(nextProps, nextState) {
//     //     console.log('Task是否要重新渲染')
//     //     if (ObjectEqual(nextProps, this.props) && ObjectEqual(nextState, this.state)) {
//     //         return false
//     //     }

//     //     return true
//     // }

//     render() {
//         console.log('Task render')
//         return (
//             <li className={this.props.isFinish ? 'finish' : ''}>{this.props.name}</li>
//         )
//     }
// }

// 函数组件
function Task(props) {
    console.log('Task render')

    return (
        <li className={props.isFinish ? 'finish' : ''}>
            {props.name}
        </li>
    )
}

Task.propTypes = {
    name: PropTypes.string.isRequired,
    isFinish: PropTypes.bool.isRequired,
}

function memo(FuncComp) {
    return class Memo extends PureComponent {
        render() {
            return <FuncComp {...this.props}/>
        }
    }
}

export default memo(Task)