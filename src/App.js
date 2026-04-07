import React from 'react'
import ThreeLayout from './components/common/ThreeLayout'

function LeftPanel() {
    return (
        <div
            style={{
                border: '1px solid #008c8c',
                height: '100%',
            }}
        >left panel</div>
    )
}

function RightPanel() {
    return (
        <div
            style={{
                border: '1px solid lightblue',
                height: '100%',
            }}
        >right panel</div>
    )
}

export default function App() {
    return (
        <>
            <div>App</div>
            <ThreeLayout
                left={<LeftPanel></LeftPanel>}
                right={<RightPanel></RightPanel>}
                gap={2}
            >
                <div style={{
                    border: '1px solid #f40',
                    height: '100%'
                }}>
                    <h1>main panel</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias repudiandae repellat accusamus expedita totam cupiditate voluptatum, nam numquam quos consequuntur fugiat, fuga commodi. Harum odit id similique modi asperiores voluptates?</p>
                </div>
            </ThreeLayout>
        </>
    )
}