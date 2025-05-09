// Task 3:

// Write an ExpressJS to take a UserName, Password, Textarea for “message” & submit button using get method.

// 1) After clicking submit button the content of submitted details should be represented on “/login” page along with one “show vowel” link.

// 2) By clicking “show vowel” link count of vowel used in submitted “message” will display on “/message” page. (Use next() to route page)
const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.static('../public',{index:'form.html'}))
app.get("/login",(req,res,next)=>{
    res.set("Content-Type","text/html")
    res.write("Username: "+req.query.Uname)
    res.write("Password: "+req.query.pass)
    req.write("Messgae: "+req.query.msg).toLowerCase()
    req.write("<a href='/message>Show Vowel</a>")
    next()
})
app.get("/message",(req,res)=>{
    data={
        msg:req.query.msg
    }
    count=0
    // str=" "
    for(let i=0;i<data.msg.length;i++){
        
    }
    if(data.msg=="a"){
        count++
    }
    else if(data.msg=="e"){
        count++
    }
    else if(data.msg=="i"){
        count++
    }
    else if(data.msg=="o"){
        count++
    }
    else if(data.msg=="u"){
        count++
    }
    else{
        res.write()
    }
})