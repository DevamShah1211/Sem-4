const express=require('express')
const app=express()
const multer= require('multer')
const store=multer.diskStorage({
    destination:"multifile",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+".pdf")
    }
})
var upload=multer({storage:store}).array("myfile",5)
app.use(express.static("../public",{index:'fileupload.html'}))
app.post('/data',upload,(req,res)=>{
    if(req.files){
        for(i of req.files){
        res.write(JSON.stringify(i.originalname)+"is Stored")
    }
    res.send()
}
})
app.listen(5005)