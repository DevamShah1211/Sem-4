http = require('http')
server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`<p id='demo'></p>
        <script> 
        var a=function(){
        document.getElementById('demo').innerHTML='Hello'
        } 
        setTimeout(a,10000) 
        </script>`)
    res.end()
}
).listen(5050)