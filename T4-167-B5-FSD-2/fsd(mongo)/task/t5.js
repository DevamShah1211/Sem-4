const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/Aditi").then(()=>
    console.log("sucess")).catch((err)=>console.error(error))

const myscheam=new mg.Schema({name:{type:String,required:true},
    age:Number})
    mg.pluralize(null)
const person=new mg.model("Student",myscheam)
const updatePersonById=async(_id)=>{
    try{
        const res=await person.findByIdAndUpdate({_id},{$set:{name:"fff",age:55}},{new:true,upsert:true})
        console.log("record update",res)
    }catch(err){
        console.error(err)
    }
}
updatePersonById('1234')
