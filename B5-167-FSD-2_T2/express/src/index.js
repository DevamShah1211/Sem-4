const express=require("express")
const app=express()
// app.get("/",(req,res)=>{
//     res.set('Content-Type','text/html')
//     res.write("<h1>Hello World</h1>")
//     res.send()
// })
app.get("/contact",(req,res)=>{
    res.set('Content-Type','text/html')
    res.write("<html><body><form action='#'><label>Name:</label><input type='text' name='name'><br><label>Email:</label><input type='email' name='email'><br><label>Password:</label><input type='password' name='pass'><br><input type='submit' submit='submit'><input type='reset' value='reset'></form></body></html>")
    res.send()
})
app.get("/user/:id/:name/:enroll",(req,res)=>{
     res.set('Content-Type','text/plain')
     res.write("Entered id is="+req.params.id+", Name=" + req.params.name + ", Enroll Number=" + req.params.enroll)
     res.send()    
})
app.get("/things/:name/:id",(req,res)=>{
    // res.set('Content-Type','text/plain')
    res.send(req.params)
})
app.get("/flights/:from-:to",(req,res)=>{
    // res.set('Content-Type','text/plain')
    res.send(req.params)
})
app.get("/users/:id/test/:test",(req,res)=>{
    // res.set('Content-Type','text/plain')
    res.send(req.params)
})
data={"name":"ABC","age":20}
app.get("/",(req,res)=>{
    res.set('Content-Type','text/plain')
    res.write("My Name is:"+data.name+" And Age is:"+data.age)
    // res.sendFile("D:/B5-167-FSD-2_T2/express/Task-1.js")
    res.send()
})
app.listen(5001,()=>{
    console.log("Server is listening on http://localhost:5001")
})