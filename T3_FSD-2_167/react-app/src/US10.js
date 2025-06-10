import React,{useState} from "react";
import m1 from './m1.png'
import m2 from './m2.png'
import m3 from './m3.png'
function US10(){
    const arr=[m1,m2,m3]
    const[img,setimg]=useState(arr[0])
    function hc(){
        const random=Math.floor(Math.random()*arr.length)
        setimg(arr[random])
    }
    return(
        <>
        <img src={img} height="500px" width="500px" />
        <button onClick={hc}>Change</button>
        </>
    )
}
export default US10