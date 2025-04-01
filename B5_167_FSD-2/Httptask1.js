//create http webpage on which home page display this is home page message in bold 
// student page shows a message details of students name number and email id and
//  any other page asked page showes page not found message (render responce, and routin)
http = require('http')
server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1><b>This is Home Page</b></h1>");
        res.end();
    }
    else if (req.url == "/student") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1><b>Student Details</b></h1>");
        res.write("<p>Student Name: Devam</p>");
        res.write("<p>Student Number: 167</p>");
        res.write("<p>Student Email: devam@gmail.com</p>");
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("<h1><b>Page Not Found</b></h1>");
        res.end();
    }
})
server.listen(3000)