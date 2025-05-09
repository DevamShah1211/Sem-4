// Task -2 (Cookie)

// You have been assigned to develop a user feedback form for a website using Express.js and cookies. 

// Implement the following requirements:

// Create a form with the following fields:

// Name (input field)

// Email (input field)

// Message (textarea field)

// Rating (radio buttons: Bad, Average, Good, Very Good, Excellent)

// When the user submits the form, store their feedback information (name, email, message, and rating) in a cookie named "feedback" that expires in 10 seconds.

// Display a confirmation message to the user after successfully submitting the form & Create a link to display the feedback details stored in the "feedback" cookie. 

// When the user click to the link, retrieve the feedback information from the cookie and display it on the page also include a link on the feedback details page to Logout.

// When the user clicks the link, user redirected to home page.
const cp=require('cookie-parser');
const express=require('express');
const app=express()
app.use(cp())
app.use(express.static('../public',{index:'feedback.html'}))
app.use(express.urlencoded())
app.post("/sf",(req,res)=>{
    const {Uname,email,msg,rate}=req.body
    const feedback={Uname,email,msg,rate}
    res.cookie("Feedback",feedback,{maxAge:10000})
    res.send("<h1>Thank You For Feedback</h1><a href='/fd'>Show Feedback</a>")  
})
app.get("/fd",(req,res)=>{
    let fed=req.cookies.Feedback
    if(fed){
        res.send(`<h2>Name:${fed.Uname}</h2><h2>Email:${fed.email}</h2><h2>Message:${fed.msg}</h2><h2>Rating:${fed.rate}</h2><a href='/'>Logout</a>`)
    }
    else{
        res.send("No Feedback Available")
    }
})
app.listen(5005)