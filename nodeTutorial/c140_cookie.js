var express      = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res) {
    console.log("Cookies: ", req.cookies)
});

console.log("http://127.0.0.1:8081/");

app.listen(8081);