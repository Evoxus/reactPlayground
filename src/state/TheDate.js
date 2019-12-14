import React from 'react';
import './Component.css'

class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    datetime: new Date(), 
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        datetime: new Date(),
      })
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
  return (
    <div className="component">
      <h2>Date Time</h2>
      <p>{this.state.datetime.toLocaleString()}</p>
    </div>
  )
  }
}

export default TheDate