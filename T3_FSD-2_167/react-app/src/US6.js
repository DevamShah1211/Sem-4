//wap by clicking btn it will diaplay text and button text will be changed as height by clicking height btn text will be 
//disappear and btn ext will show again
//change text color on clicking change text button
import React,{useState} from 'react'
function US6(){
    const[Text,setText]=useState("Show")
    const[btn,setBtn]=useState("hidden")
    function hc(){
        if(Text==="Hide"){
            setText("Show")
            setBtn("hidden")
        }
        else{
            setText("Hide")
            setBtn("Visible")
        }
        }
    return(
        <>
        <button onClick={hc}>{Text}</button>
        <h1 style={{visibility:btn}}>See the effect</h1>
        </>
   )
}
export default US6;

