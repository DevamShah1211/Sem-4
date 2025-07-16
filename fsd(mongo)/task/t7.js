// You are developing a MongoDB-based application using Mongoose.
// You need to define a userSchema that includes various validation rules to ensure data integrity and consistency.
// Define a Mongoose schema called userSchema with the following fields and validation requirements:
// username:
// Required and must be between 4 and 20 characters long.
// Must start with letters and end with digits.
// Should be trimmed of any leading or trailing spaces.
// Should be converted to uppercase before saving.

// email:
// Required, must be unique across the collection.
// Must follow the standard email format.

// age:
// Must be a number between 18 and 65.

// role:
// Must be either 'user' or 'admin'.
// Should default to 'user' if not provided.

const mg=require("mongoose")
const validator=require('validator')
mg.connect("mongodb://127.0.0.1:27017/b5_L6").then(()=>
    console.log("success")).catch((err)=>console.error(error))
const schema=new mg.Schema({
    name:{type:String,required:true,minlength:[4,'name must 4 char long'],maxlength:[20,'name must less than 20 char'],uppercase:true},
    age:{type:Number,required:true,min:[18,'age must be above 18'],max:[65,'age must below 65']},
    email:{type:String,required:true,unique:true,validate:{validator:
        function(v) {
            return validator.isEmail(v)
        }
    }},
    Role:{type:String,required:true,enum:['USER','ADMIN'],uppercase:true,default:'User'}
})
const sap=mg.model("task7",schema)
const Doc=async()=>{
    try{
        const data=[{name:"Mahi",age:65,email:"mahiVerma@gmail.com",role:'User'},
            {name:"Ayush",age:24,email:"ayushMetha@gmail.com",role:'Admin'},
            {name:"Somiya",age:18,email:'sommiyaaShethi@gmail.com'}]
        const result=await sap.insertMany(data)
        console.log(result)
    }catch(err){
        console.log('problem')
    }
}
Doc()