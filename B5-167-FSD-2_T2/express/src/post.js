const express=require('express');
const app=express()
app.use(express.urlencoded())
app.use(express.static("../public",{index:'form.html'}))
app.post('/process',(req,res)=>{
    data={
        user:req.body.Uname,
        pass:req.body.pass,
    }
    res.write("User Name:"+data.user+"\n")
    res.write("Password:"+data.pass)
    res.send()
})
app.listen(5005)