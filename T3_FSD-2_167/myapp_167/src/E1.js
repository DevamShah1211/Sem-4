// write a react js code to display alert box with text welcome to university by clicking on button
import React from "react";
const handleclick=()=>{alert('Welcome To University')}
function handle(){
return(
    <>
    <button onClick={handleclick}>Click Me</button>
    </>
)
}
export default handle;
