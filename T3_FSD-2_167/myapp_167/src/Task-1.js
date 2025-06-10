// create one react app which have 2 function add and sum will call as a component in main function and display
//  result on a dom on a browser
import React from 'react';
function Add(){
    return(
        <h3>Addition of 5 & 3={5+3}</h3>
    )
}
function Sub(){
    return(
        <h3>Subtraction of 5 & 3={5-3}</h3>
    )
}
function Main(){
    return(
        <>
        <Add/>
        <Sub/>
        </>
    )
}
export default Main;