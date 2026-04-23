import React from 'react'
// import MovablePanel from './component/MovablePanel'
// import ShowMousePoint from './component/ShowMousePoint'
import MouseListener from './component/MouseListener'

const renderPoint = mouse => (
                    <h2>
                        鼠标x: {parseInt(mouse.x)}
                        鼠标y: {parseInt(mouse.y)}
                    </h2>
                )
const renderDiv = mouse => (
                    <div style={{
                        width: 100,
                        height: 100,
                        background: '#008c8c',
                        position: 'absolute',
                        left: mouse.x - 50,
                        top: mouse.y - 50,
                    }}></div>
                ) 

export default function App() {
    return (
        <>
            <MouseListener>
                {renderPoint}
            </MouseListener>
            <MouseListener>
                {renderDiv}
            </MouseListener>
        </>
    )
}