
import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Ouraga Kevin',
      bio: 'grand fan de programmation',
      imgSrc: '/logo192.png',
      profession: 'étudiant'
    },
    show: false,
    mountTime: null,
    elapsedTime: 0
  }

  componentDidMount() {
    this.setState({
      mountTime: new Date()
    });

    this.interval = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: Math.floor((new Date() - prevState.mountTime) / 1000)
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Montrer</button>
        {this.state.show && (
          <div>
            <h3>{this.state.person.fullName}</h3>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="logo" />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Elapsed Time: {this.state.elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;

