// Task-2

//    Write express js script to perform following tasks.  (Middleware)

 

// Create one html file which contains one text field for name, email field and checkbox for subscription. 
// Html file will be loaded on home page. Email and name fields are required fields.

// On login page welcome user and email id data should be printed.

 

// a. If user checked the subscription then “Thank you for the subscription” message will be printed
//   and “logout” link will be displayed under the message. If user clicks logout link then he/she will be 
// redirected to the home page.

 

// b. If user has not opted for the subscription then “You can subscribe to get daily updates”
//  message will be printed and “subscribe” link will be displayed under the message. If user clicks subscribe 
// link then he/she will be redirected to the subscription page. In this page “Thank you for the subscription” 
// message will be printed and “logout” link will be displayed under the message. If user clicks logout link then
//  he/she will be redirected to the home page. Use concept of the middleware and you can use any of http methods(get/post).

const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.static('../public',{index:'form.html'}))
app.post('/login',(req,res,next)=>{
    res.set("Content-Type","text/html")
    res.write("Welcome "+req.body.Uname+"\n")
    res.write("Your Mail is:"+req.body.email)
    next()
})
app.post('/login',(req,res,next)=>{
    if(req.body.sub=="on"){
        res.write("<p>Thank You For Subscription</p><a href='/'>Logout</a>")
        res.send()
    }
    else{
        res.write("<p>You can subscribe to get daily updates</p><a href='/sub'>Subscribe</a>")
        // res.send()
    }
    next()
})
app.get("/sub",(req,res)=>{
    res.write("<p>Thank you for the subscription</p><a href='/'>Logout</a>")
    res.send()
})
app.listen(5005)