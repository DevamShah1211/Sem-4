// Task-6

// Write express js script to perform the tasks as asked below. (Post method)

// 1)Create one HTML file named ljform.html and add one form which contains username, password and submit button.
//  Data should be submitted by HTTP post method.

// 2)Submit button is of black color with white text. (External CSS)

// 3)On home page form should be displayed and while submitting the form, on next page named “/login” 
// if username is admin then it will display “Welcome admin” else display  “Please login with Admin name”.


const express=require('express');
const app=express()
app.use(express.urlencoded())
app.use(express.static("../public",{index:'ljform.html'}))
app.post('/login',(req,res)=>{
    data={
        user:req.body.username,
        pass:req.body.password,
    }
    if(data.user=="admin"){
        res.write("Welcome Admin")
    }
    else{
        res.write("Please login with admin name")
    }
    // res.write("Password:"+data.pass)
    res.send()
})
app.listen(5005)