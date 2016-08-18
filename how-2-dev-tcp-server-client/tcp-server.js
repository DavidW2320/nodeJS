

var net = require("net");
var colors = require("colors");

var server = net.createServer();
var log=console.log;


server.on("connection", function (socket) {
    var remoteAddr = socket.remoteAddress + ":" + socket.remotePort;
    log("net client connection is made via remote: %s".green, remoteAddr);

    socket.on("data", function (d) {
        log("data from %s: %s".cyan, remoteAddr, d);
        socket.write("Hello " + d);
    });

    socket.on("close", function () {
        log("connection from %s closed".yellow, remoteAddr);
    });

    socket.on("error", function (err) {
        log("connection %s error: %s".red, remoteAddr, err.message);
    });
});

server.on("error", function (err) {
    log("some error has occured");
});

server.listen(9000, function () {
    log("server is listening to 9000 port %j", server.address());
});

