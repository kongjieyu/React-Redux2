import React, { Component } from 'react';

class May extends Component {
  render() {
      //get the properties of parent module
      console.log(this.props);
     //we want to access to variable name and variable age from the parent module
      const {name, age} = this.props;
    return (
      <div className="App">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </div>
    );
  }
}

export default May;
