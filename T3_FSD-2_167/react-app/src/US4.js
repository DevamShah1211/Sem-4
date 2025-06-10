import React,{useState} from 'react'
import M1 from './m1.png'
import M2 from './m2.png'
function US4(){
    const[img,setimg]=useState(M1)
    function hc(){
        if(img===M1){
            setimg(M2)
        }
        else{
            setimg(M1)
        }
    }
    return(
        <>
        <button onClick={hc}>Change Image</button>
        <img src={img} height="300px" width="400px" alt="M"></img>
        </>
    )
}
export default US4;