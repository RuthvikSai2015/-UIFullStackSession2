// function fun1(){
//     console.log("Good Morning");
// }
// function fun2(){
//     console.log("Your way is very clear");
// }
// console.log("Wait for 10 seconds to get a Surprise Message"); // first thread created and closed
// setTimeout(fun1,10000); //second thread (10 secs) 1 2 3 4 5 6 7 8 9 10 
// console.log("Wait for 5 seconds to get surprise Message"); //third thread created and closed
// setTimeout(fun2,5000); //fourth thread 1 2 3 4 5(5 secs) Your way is very clear

( function(){
    setTimeout(()=>console.log(1),2000);  
    console.log(2); 
    setTimeout(()=>console.log(3),0); 
    console.log(4);
 }) ();