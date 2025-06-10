import React,{useState} from 'react'
function US2(){
    const[Count,setCount]=useState(0)
    function ic(){
        if(Count<10){
            setCount(Count+1)
        }
    }
    function dc(){
        if(Count>0){
            setCount(Count-1)
        }
    }
    return(
        <>
        <button onClick={ic}>Increment</button>
        <button onClick={dc}>Decrement</button>
        <h1>Yours Count Is{Count}</h1>
        </>
    )
}
export default US2;