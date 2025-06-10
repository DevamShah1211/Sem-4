import React from "react";
import m1 from './m1.png'
import m2 from './m2.png'
function M1(){
    const arr=[{id:1,img:m1},{id:2,img:m2}]
    return(
        <>
        {
        arr.map((value)=>{return <img src={value.img} height='200px' width='300px'></img>})
        } 
        </>
    )
}
export default M1;