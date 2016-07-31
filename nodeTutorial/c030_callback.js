/**
 * Created by a on 2016-07-19.
 */

console.log("========== Sync ==========\n\n");

var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");


console.log("\n========== aSync ==========\n");

var fs = require("fs");

fs.readFile('input.txt',


    function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
}


);

console.log("Program Ended");