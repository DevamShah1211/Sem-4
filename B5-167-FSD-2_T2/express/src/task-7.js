// Task-1

// Write express JS script to load in html file having username, password and submit button. On clicking of submit button, it should jump on check page using post method. If username is “admin” then jump on next middleware to print “welcome admin”. For any other username it should stay on same middleware to print warning message in red color. 


const express=require('express');
const app=express()
app.use(express.urlencoded())
app.use(express.static("../public",{index:'ljform.html'}))
app.post('/check',(req,res,next)=>{
    data={
        user:req.body.username,
        pass:req.body.password,
    }
    if(data.user=="admin"){
        next()
    }
    else{
        res.write("<p style='color:red';>Please login with admin name</p>")
        res.send()
    }
})
app.post("/check",(req,res)=>{
    res.write("Welcome Admin")
    res.send()
})
app.listen(5005)