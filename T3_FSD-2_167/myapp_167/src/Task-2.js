// create a basic react app with one h1 element in italic blue color with font size 15px one ordered list  of five fruits
// current time and current date with it
import React from 'react'
function pr1(){
    const date=new Date()
    const date1=JSON.stringify(date)
    return(
        <>
        <h1 style={{backgroundColor:'blue',fontStyle:'italic',fontSize:'15px'}}>Fruits
        </h1>
         <ol type="A">
                <li>Mango</li>
                <li>Banana</li>
                <li>Graps</li>
                <li>Orange</li>
                <li>WaterMelon</li>
            </ol>
        <p>{date1}</p>
        <p>I am react</p>
        </>
    );
}
export default pr1;