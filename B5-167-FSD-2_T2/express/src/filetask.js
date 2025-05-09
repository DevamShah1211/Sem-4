// Task:3 

// Write an express js script that allows only pdf type file to be uploaded using the multer middleware and saves the 
// file to the specific directory called “specific”. If file other than pdf has been uploaded then it will give an error message that “Only PDF format allowed”. 
//  Also, final output to be displayed in browser through pug file.
const express=require('express')
const app=express()
const multer= require('multer')
const store=multer.diskStorage({
    destination:"specific",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
var upload=multer({storage:store}).single("myfile")
app.use(express.static("../public",{index:'fileform.pug'}))
app.post('/data',upload,(req,res)=>{
  if (req.file.mimetype === 'application/pdf') {
    res.write("File is PDF")
  } else {
    res.write('Only PDF format allowed');
  }
  res.send()
})
app.listen(5005)

