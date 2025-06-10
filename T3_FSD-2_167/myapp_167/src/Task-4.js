//create a react app to apply a filter for skipping the digit 3 from the array 
import React from "react";
function Fil() {
    const arr = [1, 2, 3, 4, 5]
    const filtered = arr.filter((value)=>{if(value!==3){return true}})
    return (
        <>
        {filtered}
        </>
    )
}
export default Fil;
