import React, { Component } from 'react';

class AppUser extends Component {
  //state: List format
  state = {
    name: null,
    age: null,
    nationality: null
  }
  handleChange = (e) => {
    this.setState({
      //the name of the id for each field is the same as the state field on line 6,7,8
        [e.target.id]: e.target.value
    })
  }
  handleSummit = (e) => {
    e.preventDefault();
    //when summit button was clicked, the information is sent to the console
    //but how to update the state in App.js?
    //
    //console.log(this.state)
    //there are two props in App.js now, the information and addUser, we are going to use the addUser one, (this.state) means using the state in AppUser.js
    this.props.addUser(this.state);
  }

  render() {
    //pass the state to the child component 
    //onChange function is gonna update the state
    console.log(this.props);
    return (
      <div className="AppUser" onSubmit={this.handleSummit}>
        <form action="">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" onChange={this.handleChange}/>
            
            <label htmlFor="age">Age: </label>
            <input type="text" id="age" onChange={this.handleChange}/>
            
            <label htmlFor="nationality">Nationality: </label>
            <input type="text" id="nationality" onChange={this.handleChange}/>

            <button>Summit</button>
        </form>
      </div>
    );
  }
}

export default AppUser;