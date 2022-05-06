//load the htyp module to create a http server
var http = require('http');

//configure our HTTP server to respond with Hello World to all requests
var server = http.createServer(function (request,response) {
    console.log(request.url);
    response.writeHead(200, { 'Content-Type': 'text/plain'});
    response.end('Hello World \n');
});
var port = 8000;
//listen on port 8000, IP defaults to 127.0.0.1
server.listen(port, (err) => {
    if(err) {
        return console.log('Something bad happened', err);
    }
});
//put a friendly message on terminal
console.log('Server running at http://127.0.0.1:8000/');
