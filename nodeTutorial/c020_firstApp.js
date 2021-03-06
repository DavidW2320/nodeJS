/**

 1. Import required modules
 2. Create server
 3. Read request and return response
 */
var http = require("http");

http.createServer(function (request, response) {

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('how are you');

    // Send the response body as "Hello World"
    response.write('Hello World\n');
    response.end();
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');