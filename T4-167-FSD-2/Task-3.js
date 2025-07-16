//Write a node js script to enter more then one document to the collection aftwer establishing connection using mongoose and perform below queries
//1 find name test 1 excluding active status 
//2 find name  which include hi and abc
//3 find record whose age is between 10 to 20 

const mg = require("mongoose")
mg.connect("mongodb://localhost:27017/MyDB").then(() => console.log("Success")).catch((err) => console.error("error"))
const myschema = new mg.Schema({ name: { type: String, require: true }, surname: String, age: Number, active: Boolean, data: { type: Date, default: new Date() } })
mg.pluralize(null)
const person = new mg.model("Person", myschema)
// const pdata = new person({ name: "ABC", surname: "PQR", age: 2, active: true })
// pdata.save()
// const updatedoc = async (i) => {
//     try{
//         // const result=await person.updateOne({name:a},{$set:{age:30}})
//         const result1=await person.updateOne({_id:i},{$set:{age:21}})
//         console.log(result1)
//         // console.log("find name  which include hi and abc:",result1)
//         // console.log("find record whose age is between 10 to 20",result2)
//     }
//     catch(err){
//         console.log("Problem")
//     }

// }
// const updatepersonbyid = async (id,update) => {
//     try{
//         const result=await person.findByIdAndUpdate(id,update,{new:true,upset:true})
//         console.log("Record Updated",result)
//     }
//     catch(err){
//         console.error(err)
//     }
// }
const deletepersonbyid = async (id) => {
    try{
        const result=await person.findByIdAndDelete(id)
        console.log("Record Updated",result)
    }
    catch(err){
        console.error(err)
    }
}
deletepersonbyid("686cbb63715b9e160d622483")
// updatepersonbyid("686b7f076c12b4cea970c393",{name:"XYZ",age:28})
// updatedoc("686b7f076c12b4cea970c393")


