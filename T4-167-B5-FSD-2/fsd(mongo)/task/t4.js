// write a node js script to enter more then 1 document to the collection after establishing 
// connction using mongoose and perform below queries 
// 1. find name test 1 excluding active status 
// 2. find name with include hi and abc 
// 3. find a record whose age is between 10 to 20
const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/Aditi").then(()=>
    console.log("success")).catch((err)=>console.error(error))
const myscheam=new mg.Schema({name:{type:String,required:true},
    age:Number,
    active:Boolean})
    mg.pluralize(null)
const task4=new mg.model("data",myscheam)
const createdoc=async()=>{
    try{
        const pdata=[{name:"test1",age:18,active:true},{name:"hi",age:30,active:true},
            {name:"hello",age:18,active:true},{name:"hello",age:10,active:false}]
        // const reuslt=await task4.insertMany(pdata)
        // console.log(reuslt)
        const resu=await task4.find({name:"test1"},{_id:0,active:0})
        console.log(resu)
        const resu2=await task4.find({name:{$in:["hi","abc"]}})
        console.log(resu2)
        const resu3=await task4.find({$and:[{age:{$gte:10}},{age:{$lte:20}}]})
        console.log(resu3)
    }catch(err){
        console.error(err)
    }
}
createdoc()