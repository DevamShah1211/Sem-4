//create one pug file which contains text field and email field by submiting form on a next page called /data 
//submited data will be displayed in h2 tag
const express=require('express')
const app=express()
app.set('view engin','pug')
app.set("views",__dirname+"/../public")
app.get("/",(req,res)=>{
    res.render('one.pug')

})
app.get("/data",(req,res)=>{
    res.send("<h2>"+req.query.name+"</h2><h2>"+req.query.email+"</h2>")
})
app.listen(5005)