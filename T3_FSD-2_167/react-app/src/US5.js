//write a program to build a react app having two input fields and display entered value on the same page
import React, { useState } from 'react';
function US5(){
    const[fname,setfname]=useState(" ")
    const[lname,setlname]=useState(" ")
    function hc1(event){
        setfname(event.target.value)
    }
    function hc2(event){
        setlname(event.target.value)
    }
    return(
        <>
        <input type="text" value={fname} onChange={hc1}/>
        {/* <button onClick={hc1}>Fname</button> */}
        <h1>Your First Name is:{fname}</h1>
        <input type="text" value={lname} onChange={hc2}/>
        {/* <button onClick={hc2}>Lname</button> */}
        <h1>Your First Name is:{lname}</h1>
        </>
    )  
}
export default US5

