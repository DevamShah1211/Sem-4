import { useState,useEffect } from "react";
function UE2(){
    const [date,setDate] = useState(new Date());
    useEffect(() =>{
        setInterval(()=>{
            setDate(new Date());
        },1000)
    })
    return(
        <>
        <h1>
            Time:{date.toLocaleTimeString()}<br/>
            Hours-{date.getHours()}:min-{date.getMinutes()}:sec-{date.getSeconds()}
        </h1>
        </>
    )
}
export default UE2