import React, { Component } from 'react';
import May from './May';
import AppUser from './AppUser';

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
  //add the user to the state
  addUser = (infor) => {
    console.log(infor)
    infor.id = Math.random();
    let originalInformation = [...this.state.information, infor]
    this.setState({
      information: originalInformation
    })
  }
  //delete data
  deleteUser = (id) => {
    console.log(id);
    let information = this.state.information.filter (information => {
      return information.id !== id;
    }) 
    this.setState({
      information: information
    })
  }
  render() {
    //pass the state to the child component 
    //The information and addUser is a middleware (props), they allow the the child/other component to access the state, function et
    //create a Props, props
    return (
      <div className="App">
        <h1>Hi May</h1>
          <May deleteUser={this.deleteUser} information={this.state.information} />
          <AppUser addUser={this.addUser}/>
      </div>
    );
  }
}

export default App;
