// Write a program to build React app to perform the tasks as asked below.

// Add three buttons “Change Text”, “Change Color”, “Hide/Show”.

// Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in h2 tag.

// By clicking on “Change text” button text should be changed to “Welcome students” and vice versa.

// By clicking on “Change Color” button change color of text to “blue” and vice versa. This color change should be performed while double clicking on the button.

// Initially button text should be “Hide”. While clicking on it the button text should be changed to “Show” and text “React Js Hooks” will not be shown.
import React,{useState} from "react";
function US9(){
    const[text,settext]=useState("LJ University")
    const[style,setstyle]=useState("cyan")
    const[btn,setbtn]=useState("Hide")
    const[t,sett]=useState(" ")
    function txt(){
        if(text==="LJ University"){
            settext("Welcome students")
        }
        else{
            settext("LJ University")
        }
    }
    function color(){
        if(style==="cyan"){
            setstyle("blue")
        }
        else{
            setstyle("cyan")
        }
    }
    function hc(){
        if(btn==="Hide"){
            setbtn("Show")
            sett(" React Js Hooks")
        }
        else{
            setbtn("Hide")
            sett(" ")
        }
    }
    return(
        <>
        <button onClick={txt}>Change text</button>
         <button onClick={color}>Change color</button>
         <button onClick={hc}>{btn}</button>
         <h1>{t}</h1>
        <h1 style={{color:style}}>{text}</h1>
        </>
    )
}
export default US9