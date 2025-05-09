const cp=require('cookie-parser');
const express=require('express');
const app=express()
app.use(cp())
app.get("/",(req,res)=>{
    res.cookie("Fname","ABC")
    res.cookie("Lname","PQR")
    // res.cookie("contact","0011",{expires:new Date(Date.now()+20000)})
    res.cookie("City","Ahmedabad")
    // res.cookie("Email","Hi",{maxAge:20000})
    res.send("cookie-set")
})
app.get("/cookie",(req,res)=>{
    res.write(JSON.stringify(req.cookies))
    res.send()
})
app.get("/clear",(req,res)=>{
    res.clearCookie("Fname")
    res.send(req.cookies)
})
app.listen(5005)