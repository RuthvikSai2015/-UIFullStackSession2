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

// ( function(){
//     setTimeout(()=>console.log(1),2000);  
//     console.log(2); 
//     setTimeout(()=>console.log(3),0); 
//     console.log(4);
//  }) ();

//  setTimeout(() => {
//      console.log("I am in call after 3 seconds");
//  },3000)

//  let myVar = setTimeout(() => {
//     console.log("I am in call after 2 seconds");
// },2000);

// clearTimeout(myVar);

setTimeout(() => {
    console.log("first call after 5 seconds");
    setTimeout(() =>{
        console.log("after 3 seconds")
    },3000)
},5000)

function fun1(){
    console.log("first call after 5 seconds")
    setTimeout(fun2,3000);
}
function fun2(){
    console.log("after 3 seconds")
}
setTimeout(fun1,5000);