const mg = require("mongoose")
mg.connect("mongodb://localhost:27017/MyDB").then(() => console.log("Success")).catch((err) => console.error("error"))
const myschema = new mg.Schema({ name: { type: String, require: true }, surname: String, age: Number, active: Boolean, data: { type: Date, default: new Date() } })
const person = new mg.model("Person", myschema)
mg.pluralize(null)
const pdata = new person({ name: "ABC", surname: "PQR", age: 2, active: true })
pdata.save()
const createdoc = async () => {
    try {
        const pdata1 = new person({ name: "ABD", surname: "PSR", age: 3, active: true })
        const pdata2 = new person({ name: "ACD", surname: "PSP", age: 1, active: true })
        const result = await person.insertMany([pdata1, pdata2])
        console.log(result)
    }
    catch (err) {
        console.log("error")
    }
}
createdoc()