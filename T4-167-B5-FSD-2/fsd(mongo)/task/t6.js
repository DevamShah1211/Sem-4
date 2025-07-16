// wriht a node js to define schema having field like name age gender email
// apply following validation
// 1. name must remove leading space and trailing space
// 2. min and mx should be 3 and 10
// 3. all value should be storge in lowercase
// 4.age should be greater than 0
// 5. perform email validation on email field
// 6. gender must accept value in uppercase only and allowed value are male and female

const mg=require("mongoose")
const validator=require('validator')
mg.connect("mongodb://127.0.0.1:27017/b5_L6").then(()=>
    console.log("success")).catch((err)=>console.error(error))
const schema=new mg.Schema({
    name:{type:String,required:true,minlength:[3,'name must 3 char long'],maxlength:[10,'name must less than 10 char']},
    age:{type:Number,required:true,min:[1,'age must be +ve']},
    email:{type:String,required:true,unique:true,validate:{validator:
        function(v) {
            return validator.isEmail(v)
        }
    }},
    gender:{type:String,required:true,enum:['MALE','FEMALE'],uppercase:true}
})
const sample=mg.model("formssssss",schema)
const Doc=async()=>{
    try{
        const data=[{name:"Mahi",age:15,email:"mahiVerma@gmail.com",gender:'Female'},
            {name:"Ayush",age:24,email:"ayushMetha@gmail.com",gender:'Male'},
            {name:"Somiya",age:18,email:'sommiyaaShethi@gamil.com',gender:'Female'}]
        const result=await sample.insertMany(data)
        console.log(result)
    }catch(err){
        console.log('problem')
    }
}
Doc()