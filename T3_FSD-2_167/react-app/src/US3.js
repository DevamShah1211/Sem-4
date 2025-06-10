//change text color on clicking change text button
import React,{useState} from 'react'
function US3(){
    const[Style,setStyle]=useState("cyan")
    function hc(){
        if (Style==='cyan'){
            setStyle("tomato")
        }
        else{
            setStyle("cyan")
        }
    }
    return(
        <>
        <button onClick={hc}>Change Style</button>
        <h1 style={{color:Style}}>See the effect</h1>
        </>
    )
}
export default US3;