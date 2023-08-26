import React, { Component } from 'react';
import testImg from './img/femaleportrait.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Init react</h1>
        <img src={testImg} height={300} alt="test"/>
      </div>
    );
  }
}

export default App;
