// Task-9

// Create react app which contains form with following fields.

// • First Name(Input type text)

// • Lastname(Input type text)

// • Email(Input type email)

// • Password(Input type password)

// • Message (Textarea)

// • Gender(Radio Button)

// • City (Dropdown)

// Display submitted values in alert box. (Using useState Hook)
import React, { useState } from 'react';
function US12() {
    const [data,setData] = useState({})
    
    function HC(event) {
        const {name, value} = event.target
        setData({...data,[name]:value})
    }

    function HS(e) {
        e.preventDefault()
        alert("Your Detail is \n" + "Name :- " + data.fname + " " + data.lname + "\nEmail Id :- " + data.email + "\nPassword " + data.password + "\nMessage " + data.message + "\nGender " + data.gender + "\nCity " + data.city)
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

            Enter Message:- 
            <textarea type="text" onChange={HC} name="message"  placeholder="Type ..." />
            <br />
            <br />
            
            Select City :- 
            <select onChange={HC} name="city"> 
                <option value="ABD" >ABD</option>
                <option value="Surat" >Surat</option>
                <option value="Gandhinagar" >Gandhinagar</option>
                <option value="Baroda" >Baroda</option>
                <option value="Rajkot" >Rajkot</option>
            </select>
            <br />
            <br />

            Select Gender :- 
            <br />
            <input type="radio" onChange={HC} value="Male" name="gender" /> Male
            <br />

            <input type="radio" onChange={HC}  value="Male" name="gender" /> Female
            <br />
            <br />

            <input type="submit" />
            <br />
        </form>
        </>
    )
}
export default US12