// console.log("File Open ");
// console.log("File Close");
// console.log("Operation on File"); //execution will be blocked
// // resource doesnt exist deadlock
// console.log("Print data from file"); //process1

// console.log("do some other operation"); //process2

function show(){
    let today = new Date();
    document.getElementById("s1").innerHTML = today;
}
// show();

// //1 sec Call Me
// //2 sec Call Me
// setInterval(show,5000);

function showDateTime(){
   setInterval(show,1000);
}