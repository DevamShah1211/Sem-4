//write a expressjs script to req server to display JSON object in a table form on browser
const express = require('express');
const app = express();
data={"Student":[{"Name":"Devam","Age":20},{"Name":"Deep","Age":20},{"Name":"Kavya","Age":20},{"Name":"Aagam","Age":20}]}
app.get("/",(req,res)=>{
    res.set("Content-Type","text/html")
    res.write("<html><body><table border='1px'><tr><th>Name</th><th>Age</th></tr>")
    for(i of data.Student){
    res.write("<tr><td>"+i.Name+"</td>")
    res.write("<td>"+i.Age+"</td></tr>")
    }
    res.write("</table></body></html>")
    res.send()
})
app.listen(5001,()=>{
    console.log("Server is listening on http://localhost:5001")
})