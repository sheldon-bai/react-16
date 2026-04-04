import React from 'react'
import ReactDOM from 'react-dom'
import Comp from './Comp'

function App() {
  return (
    <>
      {<Comp>
          <h1>abcefghi</h1>
          <Comp />
        </Comp>}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))