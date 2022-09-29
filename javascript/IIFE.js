//without Return and without parameters
(function(){
    console.log("Hello");
})();

//without RT and with PL
(function(n1,n2){
    console.log(n1+n2);
})(10,20);

//with RT and without PL
let x = (function(){
    let n1,n2;
    n1=20,n2=30;
    return (n1+n2);
})();
console.log(x);

//with RT and with PL
let x1= (function(n1,n2){
   return (n1+n2);
})(10,20);

let x2= (function(n1,n2){
    return (n1+n2);
 })(10,20);

console.log("x1-------",x1);
console.log("x2--------",x2);