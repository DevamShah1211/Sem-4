const express = require('express');
const app = express();
app.use(express.static("../public",{index:"form.html"}))
app.get("/process",(req,res)=>{
    data={user:req.query.name,pass:req.query.pass}
    console.log(data)
    res.send(data)
})
app.listen(8081, () => { console.log("sever is listen http://localhost:8081") })