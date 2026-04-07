import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from './components/common/Modal'

class App extends Component {
  state = {
    showModal: false,
  }

  showModal = () => {
    this.setState({
      showModal: true
    })
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <div style={{
          width: '100px',
          height: '100px',
          background: 'red',
        }}>Content</div>
        {
          this.state.showModal ? (
            <Modal onClose={this.hideModal}>
              <div>Children abc</div>
              <button onClick={this.hideModal}>Close the Modal</button>
            </Modal>
          ) : null
        }
        <button onClick={this.showModal}>Display the Modal</button>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))