// Write a file Using object and read file which gives you same object in console also 
// it gives fs name and last name indivividually

fs = require('fs')
var obj = {
    "Name":
        [{ "fname": "ABC" }, { "lname": "PQR" }]
}
fs.writeFileSync("s1.txt", JSON.stringify(obj))
data=fs.readFileSync("s1.txt","utf-8")
obj=JSON.parse(data)
console.log(obj)
console.log(obj.Name[0].fname)
console.log(obj.Name[1].lname)
