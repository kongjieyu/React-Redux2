import React from 'react';

//functional(UI) component: cannot use this.prop(Container Component) 
const May = (props) => {

      //get the properties of parent module
      //console.log(this.props);
     //we want to access to variable name and variable age from the parent module
     //get the List of information from the parent Component
     const {information} = props;
     //initialize a new variable and 
     //map method in JS : taking an array and map that array to a new array

    //-------------------
    //  const informationList = information.map(information=>{
    //      if (information.age>20) {
    //         return (
    //             <div className="May" key={information.id}>
                
    //             <div>Name: {information.name}</div>
    //             <div>Age: {information.age}</div>
    //             <div>Age: {information.nationality}</div>
    //         </div>
    //         )
    //      } else {
    //          return null
    //      }
    //  })
    //-------------------

    const informationList = information.map (information => {
        //condition ? (): ()
        return information.age >20 ? (
            <div className="May" key={information.id}>      
                 <div>Name: {information.name}</div>
                 <div>Age: {information.age}</div>
                 <div>Age: {information.nationality}</div>
             </div>
        ): null;
    });
      //const {name, age, nationality} = this.props;
    return (
        <div className = "information-list">
            { informationList }

        </div>
    )

}

export default May
