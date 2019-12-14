import React from 'react';
import './Component.css'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    count: 0, 
    }
  }
  handleAddButtonClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }
  handleResetClick = () => {
    this.setState({
      count: 0,
    })
  }
  render() {
  return (
  <div className="component">
    <h2>Counter</h2>
    <p>The current count is: {this.state.count}</p>
    <button
      onClick={this.handleAddButtonClick}>
      Add 1
    </button>
    <button
      onClick={this.handleResetClick}>
        Reset
    </button>
  </div>
  )
  }
}

export default Counter