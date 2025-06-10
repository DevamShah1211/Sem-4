//write a react code to create product page contain name image price and discription of any three products 
//all data should be pass props method use App.js to call product.js
import React from "react";
import './App.css';
function Task3(props){
    return(
        <div className="task3">
            <h3>{props.Name}</h3>
            <img src={props.img} alt="Pr3" style={{height:200,width:150}}></img>
            <br/>
            <b>Price={props.Price}</b>
            <p>Description={props.disc}</p>
        </div>
    )
}
export default Task3;