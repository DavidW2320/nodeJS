/**
 * Created by a on 2016-07-20.
 */
var express = require('express');
var app = express();
var server = null;
app.get('/', function (req, res) {
    res.send('Hello World');
});

server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});