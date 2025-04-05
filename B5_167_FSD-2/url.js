u = require('url')
fs = require('fs')
http = require('http')
// // var a="http://localhost:8080/default.html?Name=Devam Shah&Initial=DNS"
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     q = u.parse(req.url, true).query
//     res.write(`<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>
//     <form action="#" method="get">
//         <label>Name:</label>
//         <input type="text" name="name">
//         <label>Email:</label>
//         <input type="email" name="email">
//         <input type="submit">Submit

//     </form>
// </body>

// </html>`)
// res.write("Welcome"+q.name)
//     res.end()
// }).listen(3007)

//write a query string url on console as well as on file using ES6 call back 
// var a = "http://localhost:8080/default.html?Name=Devam Shah&Initial=DNS"
// var q = u.parse(a, true).query
// console.log(q)
// fs.writeFileSync("url.txt", JSON.stringify(q))

//write a node js program which fetch file name from requested url and print that file data on http webserver
server=http.createServer((req,res)=>{
    q=u.parse(req.url,true)
    data=fs.readFileSync("."+q.pathname)
    res.writeHead(200,{'Content-Type': 'text/html' })
    res.write(data)
    res.end()
}).listen(3007)
