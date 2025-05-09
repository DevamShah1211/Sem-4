const express=require('express');
const path=require('path');
const app=express();
const sp=path.join(__dirname,"../public")
app.use(express.static(sp))
app.get("/",(req,res)=>{
    res.sendFile(sp+"/index.html")
})
app.listen(8081, () => { console.log("sever is listen http://localhost:8081") })