const express=require('express')
const app=express()
app.set('view-engine','pug')
app.set("views",__dirname+"/../public")
app.get('/',(req,res)=>{
    res.render("a.pug")
})
app.listen(5005)