/**
 * Created by a on 2016-07-19.
 */
//  http://www.tutorialspoint.com/nodejs/nodejs_buffers.htm

console.log("\n\n ============ Create Buffers");
    var buf = new Buffer(10);
    var buf = new Buffer([10, 20, 30, 40, 50]);
    var buf = new Buffer("Simply Easy Learning", "utf-8");

console.log("\n\n ============ write buffer");
    //buf.write(string[, offset][, length][, encoding])
    buf = new Buffer(256);
    len = buf.write("Simply Easy Learning");

    console.log("Octets written : "+  len);

console.log("\n\n ============ read buffer");
    //buf.toString([encoding][, start][, end])
    buf = new Buffer(26);
    for (var i = 0 ; i < 26 ; i++) {
        buf[i] = i + 97;
    }

    console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
    console.log( buf.toString('ascii',0,5));   // outputs: abcde
    console.log( buf.toString('utf8',0,5));    // outputs: abcde
    console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

console.log("\n\n ============ Convert buffer to JSON");
    //buf.toJSON()
    var buf = new Buffer('Simply Easy Learning');
    var json = buf.toJSON(buf);

    console.log(json);

console.log("\n\n ============ Concatenate Buffers");
    //Buffer.concat(list[, totalLength])
    var buffer1 = new Buffer('TutorialsPoint ');
    var buffer2 = new Buffer('Simply Easy Learning');
    var buffer3 = Buffer.concat([buffer1,buffer2]);
    console.log("buffer3 content: " + buffer3.toString());

console.log("\n\n ============ Compare Buffers");
    //buf.compare(otherBuffer);
    var buffer1 = new Buffer('ABC');
    var buffer2 = new Buffer('ABCD');
    var result = buffer1.compare(buffer2);

    if(result < 0) {
        console.log(buffer1 +" comes before " + buffer2);
    }else if(result == 0){
        console.log(buffer1 +" is same as " + buffer2);
    }else {
        console.log(buffer1 +" comes after " + buffer2);
    }

console.log("\n\n ============ Copy Buffer");
    //buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
    var buffer1 = new Buffer('ABC');
    //copy a buffer
    var buffer2 = new Buffer(3);
    buffer1.copy(buffer2);
    console.log("buffer2 content: " + buffer2.toString());

console.log("\n\n ============ Slice Buffer");
    //buf.slice([start][, end])
    var buffer1 = new Buffer('TutorialsPoint');
    //slicing a buffer
    var buffer2 = buffer1.slice(0,9);
    console.log("buffer2 content: " + buffer2.toString());

console.log("\n\n ============ ");
console.log("\n\n ============ ");
console.log("\n\n ============ ");
console.log("\n\n ============ ");