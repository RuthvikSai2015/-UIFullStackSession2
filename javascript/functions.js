// With Return and with Parameter List 
let add = function(n1,n2){
    return n1+n2;
}
let result=add(10,20);
console.log(result);

//Without Return and with Parameter List
let add1 = function(n1,n2){
    console.log(n1+n2);
}
add1(10,20);

//With Return and without Parameter List
let add2 = function(){
    let n1,n2;
    n1=10;
    n2=20;
    return (n1+n2);
}
let result1 = add2();
console.log(result1);

//Without Return and without parameter
let add3 = function(){
    let n1,n2;
    n1=20;
    n2=45;
    console.log(n1+n2);
}
console.log(add3());