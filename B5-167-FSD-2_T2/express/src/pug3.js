const express=require('express')
const app=express()
app.set("view engin","pug")
app.set("views",__dirname+"/../public")
app.get("/",(req,res)=>{
    res.render("two.pug",{message:"Hello",name:"LJ",id:2})
})
app.listen(5005)