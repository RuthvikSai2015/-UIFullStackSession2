// var fs = require("fs");
// var data = fs.readFile("input.json",function(err,data){
//     if(err) return console.log(err);
//     console.log(data.toString());
// })
// console.log("Program Ended");

//Import events module
var events = require("events");

// //Create an Object 
// var eventEmitter = new events.EventEmitter();

// //Created an event
// var connectionHandler = function connect(){
//     console.log("connection successful");
//     eventEmitter.emit("data_received");
// }
// //Binding event to Handler
// eventEmitter.on("connection",connectionHandler);

// //Event Loop to trigger callback
// eventEmitter.on("data_received",function(){
//     console.log("data received successfully");
// })
// // Fire the Connection Event
// eventEmitter.emit("connection");

// console.log("Program Ended");

// var buf = new Buffer(200);
// len = buf.write("Node Js Learning");

// console.log("length-----"+len);
// console.log(buf.toString())

// var fs = require('fs');
// var fileData = "";
// //create a readable stream
// var readable = fs.createReadStream('input.txt');

// // Set the encoding to be utf8
// readable.setEncoding("UTF8");

// //Handle Stream Event data , end and error
// readable.on('data',function(data){
//   fileData += data; 
// })

// readable.on('end',function(){
//     console.log(fileData);
// })

// readable.on('error',function(err){
//     console.log(err.stack);
// });

// console.log("Program Ended");

var fs = require('fs');
var fileData = "Sample Write Stream";
//create a readable stream
var writable = fs.createWriteStream('output.txt');

// Set the encoding to be utf8
writable.write(fileData,"UTF8");

//Handle Stream Event finish and error
writable.on('finish',function(){
  console.log("Write Completed");
})


writable.on('error',function(err){
    console.log(err.stack);
});

console.log("Program Ended");