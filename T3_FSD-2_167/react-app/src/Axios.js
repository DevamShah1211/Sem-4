import {useState,useEffect} from 'react'
import axios from 'axios'
const RJ=()=>{
    const[pic,setpic]=useState('')
    function FJ(){
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then((response)=>{setpic(response.data)})
        .catch((error)=>{console.log(error)})
    }
    useEffect(FJ,[])
    return(
        <>
        <img src={pic.message} height="200px" width="200px"/>
        <button onClick={FJ}>Generate</button>
        </>
    )
}
export default RJ