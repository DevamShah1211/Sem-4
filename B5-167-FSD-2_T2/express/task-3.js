//load index.html file which will be in public folder inside express folder and your js file 
const express=require('express');
const app=express();
app.use(express.static("./public"))
app.listen(8081, () => { console.log("sever is listen http://localhost:8081") })