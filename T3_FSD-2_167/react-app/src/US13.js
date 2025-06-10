// Task-11 
// Create react app which contains form with fields Name, Email Id, Password and Confirm Password. When the
//  form submitted the values of password and confirm password fields must be same else it will give an error message 
// in alert box.  If form submitted successfully then display entered name and email id in alert box.
import React, { useState } from 'react';
function US13() {
    const [data,setData] = useState({})
    
    function HC(event) {
        const {name, value} = event.target
        setData({...data,[name]:value})
    }

    function HS(e) {
        e.preventDefault()
        if(data.password===data.cpass){
        alert("Your Detail is \n Name :- " + data.fname + " " + data.lname + "\nEmail Id :- " + data.email + "\nPassword " + data.password)
        }
        else{
            alert("Password and Confirm Password must be same")
        }
    }

    return(
        <>
        <form onSubmit={HS}>
            Enter First Name :- 
            <input type="text" onChange={HC} name="fname" placeholder="F Name"/>
            <br />
            <br />
            Enter Last Name :- 
            <input type="text" onChange={HC} name="lname"  placeholder="L Name"/>
            <br />
            <br />
            
            Enter Email :- 
            <input type="email" onChange={HC} name="email"  placeholder="Email"/>
            <br />
            <br />

            Enter Password :- 
            <input type="password" onChange={HC} name="password" placeholder="Password"/>
            <br />
            <br />

            Enter Confirm Password :- 
            <input type="password" onChange={HC} name="cpass" placeholder="Password"/>
            <br />
            <br />

            <input type="submit" />
            <br />
        </form>
        </>
    )
}
export default US13