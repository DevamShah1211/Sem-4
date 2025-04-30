// write express js script to print message in next line splitting by dot in your html file data
const express = require('express');
const app = express();
app.use(express.static("../public",{index:"form.html"}))
app.get("/process",(req,res)=>{
    res.set("Content-Type","text/html")
    t1=(req.query.message).split(".")
    for(i in t1){
        res.write(t1[i]+"<br>")
    }
    res.send()
})
app.listen(8081, () => { console.log("sever is listen http://localhost:8081") })