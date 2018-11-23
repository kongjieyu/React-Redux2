import React, { Component } from 'react';
import May from './May';

class App extends Component {
  //state: List format
  state = {
    information : [
      {name: "May", age: "27", nationality: "chinese", id:1 },
      {name: "Eric", age: "30", nationality: "US", id:2 },
      {name: "Tom", age: "34", nationality: "US", id: 3 },
      {name: "Jenny", age: "14", nationality: "US", id: 4 }
    ]
  }
  render() {
    //pass the state to the child component 
    return (
      <div className="App">
        <h1>Hi May</h1>
          <May information={this.state.information} />
      </div>
    );
  }
}

export default App;
