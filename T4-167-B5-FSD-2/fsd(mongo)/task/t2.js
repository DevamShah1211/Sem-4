const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/Aditi").then(()=>
    console.log("success")).catch((err)=>console.error(error))
const myscheam=new mg.Schema({name:{type:String,required:true},
    surname:String,
    age:Number,
    active:Boolean,
    date:{type:Date,default:new Date()}})
    mg.pluralize(null)
const person=new mg.model("person1",myscheam)
const createdoc=async()=>{
    try{
        const pdata=new person({name:"Aditi",surname:"Sharma",age:18,active:false})
        const reuslt=await pdata.save()
        console.log(reuslt)
    }catch(err){
        console.error(err)
    }
}
createdoc()