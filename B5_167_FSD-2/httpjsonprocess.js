http=require('http')
server=http.createServer((req,res)=>{
    if(req.url=="/"){
        const a={"Name":"abc","No":32}
        res.writeHead(200,{'Content-Type': 'application/json' })
        res.write("Thanks")
        res.write(JSON.stringify(a))
        res.end()
    }
})
server.listen(3000)