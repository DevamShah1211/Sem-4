// Task -5 (Session)

// Write a script to meet following requirements:

//  Create session.html file page which contains form (username,password,login button). and open it on localhost.

// After clicking submit button, it should jump on “save” page. Store username and password in session.

// After saving session, redirect to “fetchdata” page and read value. Put a LOGOUT link button here. On this page check authentication of user. User name and password must be “admin” and “admin@123” respectively.

// If this condition is true then display welcome admin and display logout link on this page(fetchdata).

// By clicking on logout link user should jump to “destroy” page and destroy the session there and display the message “Session destroyed”.  And give the link of “login” under that message. By clicking that link user will be redirected to the home page.

// Else display “Please enter valid username and password” and login link on this page(fetchdata)
const express = require('express')

const app = express()
const session = require('express-session')

p=require('path')
app.use(express.static('../public'))
app.use(session({secret:'sess',
    cookie:{maxAge:20000}
}))
app.get("/savesession",(req,res)=>{
    req.session.uname=req.query.uname
    req.session.pass=req.query.pass
    res.redirect('fetchdata')
})
app.get("/fetchdata",(req,res)=>{
    if(req.session.uname=="Admin" && req.session.pass=="Admin@123"){
        res.write("<h1>Welcome Admin</h1>")
        res.write("<a href='/destroy'>Logout</a>")
    }
    else{
        res.write("<h1>Enter Valid Details</h1><a href='/'>Login</a>")
    }
    res.send()
})
app.get("/destroy",(req,res)=>{
    res.clearCookie("connect.sid")
    res.redirect("/")
})
app.listen(5005)
