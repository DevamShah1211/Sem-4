const { readFileSync } = require('fs')

fs=require('fs')
// obj={"Name":"ABC","Age":20}
fs.writeFileSync("source.txt","Name : Devam Shah")
fs.appendFileSync("source.txt"," Age : 20")
data= fs.readFileSync("source.txt","utf-8")
console.log(data)
console.log("Destination File Data")
fs.writeFileSync('destination.txt',data)
data=readFileSync('destination.txt','utf-8')
console.log(data)
// fs=require('fs')
// obj={"Name":"ABC","Age":20}
// fs.writeFileSync("source.txt",JSON.Stringify(obj))
// console.log(obj)
// data
