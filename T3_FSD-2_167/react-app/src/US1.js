import React,{useState} from 'react'
function US1(){
    const[Count,setCount]=useState(0)
    function hc(){
        setCount(Count+1)
    }
    return(
        <>
        <button onClick={hc}>clicked{Count}times</button>
        <h1>Yours Count Is{Count}</h1>
        </>
    )
}
export default US1;