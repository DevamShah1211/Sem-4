//create a react app which takes user defined input number 1 and 2 and perform sub add mul and div of this number using
//useState hook
import React, { useState } from 'react';
function US8(){
    const[data,setdata]=useState({})
    const[result,setresult]=useState()
    const hc=(e)=>{
        const{name,value}=e.target
        setdata({...data,[name]:value})
    }
    function add(){
        setresult(parseInt(data.num1)+parseInt(data.num2))
    }
    function sub(){
        setresult(parseInt(data.num1)-parseInt(data.num2))
    }
    function mul(){
        setresult(parseInt(data.num1)*parseInt(data.num2))
    }
    function div(){
        setresult(parseInt(data.num1)/parseInt(data.num2))
    }
    return(
        <>
        <label>Num1:</label>
        <input type="number" name="num1"  onChange={hc}/>
        <br/>
        <label>Num2:</label>
        <input type="number" name="num2" onChange={hc}/>
        <br/>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Sub</button>
        <button onClick={mul}>Mul</button>
        <button onClick={div}>Div</button>
        <h1>{result}</h1>
        </>
    )  
}
export default US8

