// const express = require('express')

// const app = express()

// const session = require('express-session')

// app.use(session({secret:'This is secret key',
//     // saveUninitialized:,
//     // resave:,
//     cookie:{maxAge:2000}
// }))

// app.get('/',(req,res)=>{
//     if(req.session.page_view){
//         req.session.page_view++
//         res.send(`you are visted ${req.session.page_view}`)
//     }
//     else{
//         req.session.page_view=1
//         res.send("Welcome to my Website")
//     }
// })

// app.listen(5001,()=>{
//     console.log("Server is listen http://localhost:5001")
// })




// create a html 


// const express = require('express')

// const app = express()

// const session = require('express-session')

// app.use(express.static("../public",{index:"index.html"}))

// app.get('/savesession',(req,res)=>{
//     username=req.query.uname
//     pass=req.query.pass

//     app.use(session({secret:'hello',
//         cookie:{maxAge:2000}
//     }))

//     req.session.uname=username
//     req.session.Password=pass
//     res.redirect("fetchsession")
// })

// app.get('/fetchsession',(req,res)=>{
//     res.send("<h1>Welcome "+req.session.uname+"</h1>"+"<a href='/deletsession'>Delete Session</a>")
// })

// app.get('/deletsession',(req,res)=>{
//     req.session.destroy()
//     res.clearCookie("connect.sid")
//     res.redirect("/")
// })

// app.listen(5001,()=>{
//     console.log("Server is listen http://localhost:5001")
// })


const express = require('express')

const app = express()

app.set("view engine","pug")

p=require('path')

sp=p.join(__dirname,"../public")

app.get("/",(req,res)=>{
    res.render(sp+"/one")
})

app.get("/about",(req,res)=>{
    res.send("<h1>welcome to about page<h1>")
})

app.listen(5001,()=>{
    console.log("Server is listen http://localhost:5001")
})