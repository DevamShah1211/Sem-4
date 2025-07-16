const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/Aditi").then(()=>
    console.log("sucess")).catch((err)=>console.error(error))

const myscheam=new mg.Schema({name:{type:String,required:true},
    age:Number})
    mg.pluralize(null)
const person=new mg.model("person",myscheam)
const updatedoc=async(i)=>{
    try{
        const result=await person.updateOne({name:i},{$set:{age:27}})
        console.log(result)
    }catch(err){
        console.error(err)
    }
}
updatedoc('Abc')
