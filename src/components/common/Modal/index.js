import React from 'react'
import './index.css'

export default function Modal(props) {
    const defaultProps = {
        bg: 'rgba(0, 0, 0, 0.3)'
    }
    const datas = Object.assign({}, defaultProps, props)

    return (
        <div
            className='modal'
            onClick={e => {
                console.log(e.target)
                
                if (e.target.className === 'modal') {
                    datas.onClose()
                }
            }}
            style={{
            background: datas.bg,
        }}>
            <div className='modal-center'>
                {props.children}
            </div>
        </div>
    )
}