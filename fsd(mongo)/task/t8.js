const mg=require("mongoose")
const expr=require('express')
const app=expr()
mg.connect("mongodb://127.0.0.1:27017/B5_L62").then(()=>
    console.log("sucess")).catch((err)=>console.error(error))

const myscheam=new mg.Schema({uname:{type:String,required:true},
    pass:{type:String,required:true}})
    mg.pluralize(null)
const person=new mg.model("data",myscheam)
app.use(expr.static(__dirname,{index:'form.html'}))
app.get('/login',(req,res)=>{
    const data=new person({uname:req.query.username,pass:req.query.password})
    data.save()
    res.send('Record Inserted')
})
app.listen(8000)