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
const createdoc = async () => {
    // try {
    //     const pdata1 = new person({ name: "Test3", surname: "SQL", age: 15, active: true })
    //     const pdata2 = new person({ name: "Test4", surname: "HEL", age: 12, active: true })
    //     const result = await person.insertMany([pdata1, pdata2])
    //     console.log(result)
    // }
    // catch (err) {
    //     console.log("error")
    // }
    try{
        const result=await person.find({name:"Test1"},{active:0})
        const result1=await person.find({name:{$in:["hi","abc"]}})
        const result2=await person.find({age:{$gt:10,$lt:20}})
        console.log("find name Test1 excluding active status:",result)
        console.log("find name  which include hi and abc:",result1)
        console.log("find record whose age is between 10 to 20",result2)
    }
    catch(err){
        console.log("Problem")
    }

}
createdoc()