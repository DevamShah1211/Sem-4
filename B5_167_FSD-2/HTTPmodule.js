http=require('http')
server=http.createServer(
    function(req,res){
        res.write(" HOW are you")      
        res.write("<h1>Hello</h1><br>")
        res.end(" I am Fine")
})
server.listen(5002)