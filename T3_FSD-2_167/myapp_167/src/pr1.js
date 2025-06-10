import React from "react";
function Pr1(props){
    return(
        <div>
            <h1>Mobile Site</h1>
            <h1>{props.Name}:{props.Price}</h1>
        </div>
    )
}
export default Pr1;