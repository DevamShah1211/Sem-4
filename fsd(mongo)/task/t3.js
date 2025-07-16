const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/Aditi").then(()=>
    console.log("success")).catch((err)=>console.error(error))
const myscheam=new mg.Schema({name:{type:String,required:true},
  
    age:Number})
const person=new mg.model("data",myscheam)
const createDoc=async()=>{
    try{
        const pdata=[{name:"abc",age:30},{name:"xyz",age:33},{name:"mno",age:40}]
        const result=await person.insertMany(pdata)
        console.log(result)
    }catch(err){
        console.log('problem')
    }
}
createDoc()