const express=require('express')
const app=express()
app.set("view engin","pug")
app.set("views",__dirname+"/../public")
app.get("/",(req,res)=>{
    res.render('form.pug')
})
app.get("/data",(req,res)=>{
    res.render('form_output.pug',{name:req.query.name,email:req.query.email,course:req.query.course})
})
app.listen(5005)