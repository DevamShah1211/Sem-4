// Task -1 (Cookie)

// Write an express js script to set cookies of submitted values of form. Perform following tasks.

// Create a HTML file

// Once form submitted, store all these entered values to the respective cookies on ‘/next’ page. 

// Redirect user to “/admin” page and clear the cookie set for the last name.  

// Display remaining set cookie values on this page. (Using get method)

const cp=require('cookie-parser');
const express=require('express');
const app=express()
app.use(cp())
app.use(express.static('../public',{index:'form.html'}))
app.get("/next",(req,res)=>{
    res.cookie("Fname",req.query.Fname)
    res.cookie("Lname",req.query.Lname)
    res.cookie("Pass",req.query.pass)
    res.redirect("/admin")
    res.send("Cookie-Set")  
})
app.get("/admin",(req,res)=>{
    res.clearCookie("Lname")
    res.send(req.cookies)
})
app.listen(5005)