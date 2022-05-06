//load the net module to create aa tcp server
var net=require('net');

//Create a new TCP server. The handler argument is automatically set as a listener for the 'connection' event
var server=net.createServer(function (socket) {
    //every time someone connects,tell them hello and then close the connection
    console.log('Connection from' + socket.remoteAddress);
    socket.end('Hello World \n');
});
var port=7000;
//fire up the server bound to port 7000 on localhost
server.listen (port, 'localhost');

console.log(`TCP Server listening on port ${port} at localhost`);
