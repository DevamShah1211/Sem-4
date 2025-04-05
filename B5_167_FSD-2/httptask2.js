//create http webpage and display message welcome to http server method in h1 tag after 10 second 
http=require('http')
server=http.createServer(function(req,res){
    setTimeout(() => {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1>Welcome to HTTP Server</h1>")
        res.end()
    }, 10000);

    })
    const port=3000
    server.listen(port,()=>{console.log('http://localhost:${port}/')})
