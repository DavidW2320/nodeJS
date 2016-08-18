
var readlineSync = require("readline-sync");

var colors = require("colors");
var net = require("net");

var HOST = "127.0.0.1";
var PORT = 9000;

var client = null;

function runMenu(){
    setTimeout(function () {
        menu();
    }, 0);
}

function OpenConnection() {
    if(client) {
        console.log("--Connection is already open -- ".red);
        runMenu();
        return;
    }

    client = new net.Socket();

    client.on("error", function (err) {
        client.destory();
        client = null;
        console.log("Error: Connection could not be opened. Msg: %s".red, err.message);
        runMenu();
    });

    client.on("data", function (data) {
        console.log("Received: %s".cyan, data);
        runMenu();
    });

    client.connect(PORT, HOST, function () {
        console.log("Connection opened successflly!".green);
        runMenu();
    });
    runMenu();
}


function SendData(data) {
    if(!client) {
        console.log("--Connection is not open or closed--".red);
        runMenu();
        return;
    }
    client.write(data);
}

function CloseConnection() {
    if(!client){
        console.log("--Connection is not open or already closed--".red)
        runMenu();
        return;
    }
    client.destory();
    client = null;
    console.log("Connection closed successfully!".yellow);
    runMenu();
}

function menu() {
    var lineRead = readlineSync.question("\n\nEnter option (1-Open, 2-Send, 3-Close, 4-quit):");

    switch (lineRead) {
        case "1":
            OpenConnection();
            break;
        case "2":
            var data = readlineSync.question("Enter data to send:");
            SendData(data);
            break;
        case "3":
            CloseConnection();
            break;
        case "4":
            return;
            break;
        default:
            runMenu();
            break;
    }
}

runMenu();