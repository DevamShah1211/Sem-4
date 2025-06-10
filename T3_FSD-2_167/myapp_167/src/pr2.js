//Wap in react.js in which you have to create 2 variable name student name and university name as an object
//this both value should be pass to another component named details where this value will be printed using props
import React from 'react';
function Pr2(props){
    return(
        <div>
            <h1>My Name is:{props.data.Name} & Collage is: {props.data.Uni}</h1>
        </div>
    )
}
export default Pr2;
