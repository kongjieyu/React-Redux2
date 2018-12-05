import React, { Component } from 'react';
import May from './May';
import AddInfor from './AddInfor';

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
  addInfor = (infor) => {
    console.log(infor);
    infor.id = Math.random();
    let newInformation = [...this.state.information, infor]
    this.setState({
      information: newInformation
    })
  }
  deleteInfor = (id) => {
    console.log(id)
    let newInformationAfterDelete = this.state.information.filter(information => {
      return information.id !== id
    });
    this.setState({
      information: newInformationAfterDelete
    })
  }
  render() {
    //pass the state to the child component 
    return (
      <div className="App">
        <h1>Hi May</h1>
          <May deleteInfor={this.deleteInfor} information={this.state.information} />
          <AddInfor addInfor={this.addInfor}/>
      </div>
    );
  }
}

export default App;
