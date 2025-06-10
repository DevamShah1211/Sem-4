import React,{useReducer} from "react";
function UR1(){
    // const is=0
    // const[state,dispatch]=useReducer(reduce,is)
    // function reduce(state,action){
    //     if(action.type=="increment"){
    //         return state+1
    //     }
    //     if(action.type=="decrement"){
    //         return state-1
    //     }
    //     if(action.type=="zero"){
    //         return 0
    //     }
    // }
    // return(
    //     <>
    //     <h1>{state}</h1>
    //     <button onClick={()=>dispatch({type:'increment'})}>Inc</button>
    //     <button onClick={()=>dispatch({type:'decrement'})}>Dec</button>
    //     <button onClick={()=>dispatch({type:'zero'})}>Zero</button>
    //     </>
    // )
    const [state,dispatch]=useReducer(reduce,5)
     function reduce(state,action){
        return state+action
    }
    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:5})}>Inc</button>
        </>
    )
}
export default UR1