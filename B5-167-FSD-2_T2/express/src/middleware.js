const express=require('express');
const app=express();
const cb1=(req,res,next)=>{
    // res.set("Content-Type","text/html")
    res.write("<strong>First</strong>")
    next()
}
const cb2=(req,res,next)=>{
    res.set("Content-Type","text/html")
    res.write("<p>Addition="+(5+9)+"</p>")
    next()
}
app.use("/ee",cb2,cb1)
app.get("/ee",(req,res)=>{
    res.write("Welcome")
    res.send()
})
app.listen(3007)