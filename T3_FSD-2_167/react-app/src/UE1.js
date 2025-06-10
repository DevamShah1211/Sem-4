import { useState,useEffect } from "react";
function UE1(){
    const [countA, setCountA] = useState(0);
    const [countB,setCountB] = useState(0);
    useEffect(() =>{
        alert("Clicked Button A")
    })
    function hcA(){
        setCountA(countA+1);
    }
    function hcB(){
        setCountB(countB+1);
    }
    return(
        <>
        <button onClick={hcA}>{countA}A</button>
        <button onClick={hcB}>{countB}B</button>
        </>
    )
}
export default UE1