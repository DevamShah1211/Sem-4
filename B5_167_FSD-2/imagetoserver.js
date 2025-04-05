http=require('http')
fs=require('fs')
server=http.createServer((req,res)=>{
    if(req.url=="/gallery"){
        res.writeHead(200,{'Content-Type':'image/png'})
        a=fs.readFileSync("images.png")
        res.write(a)
        res.end()
    }
    else{
        res.end("Not Found")
    }
}).listen(5001)
