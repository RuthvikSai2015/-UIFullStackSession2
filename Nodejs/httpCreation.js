var http = require("http");
http.createServer( function(req,res){
    //send the HTTP header
    //HTTP Status 200 : ok 
    // content type : text/plain
    
    res.writeHead(200, { 'Content-Type' : 'text/plain'})
    res.end('Hello World\n');
 }).listen(8081);

 console.log("Server running at http://localhost:8081/")