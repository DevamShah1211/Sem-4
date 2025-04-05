http=require('http')
server=http.createServer(
    function(req,res){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(req.url)
        res.write('data fetched')
        res.end()

    }
)
server.listen(5002)

