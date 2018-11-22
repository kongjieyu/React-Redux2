import React, { Component } from 'react';
import May from './May';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi May</h1>
        <May name="May" age="27" />
      </div>
    );
  }
}

export default App;
