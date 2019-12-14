import React from 'react';

class RouletteGun extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    }
  }

  static defaultProps = {
    bulletInChamber: 8
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  
  handleButtonClick = () => {
    this.setState({
      spinningTheChamber: true,
    });
    this.timeout = setTimeout(() => {
      this.setState({
        chamber: Math.ceil(Math.random() * 8),
        spinningTheChamber: false,
      })
    }, 2000)
    console.log('Clicked pull trigger');
  }
  render() {
    return (
      <div>
        <p>{this.state.spinningTheChamber ? 'spinning the chamber and pulling the trigger! ...' : this.state.chamber === this.props.bulletInChamber ? 'BANG!!!!' : 'you\'re safe'}</p>
        <button onClick={this.handleButtonClick}>Pull the trigger</button>
      </div>
    )
  }
}

export default RouletteGun;