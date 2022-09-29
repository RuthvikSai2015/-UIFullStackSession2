function wish1(){
    return "Welcome";
}
function wish2(){
    return "Thanks";
}
// function sum(n1,n2){
//     let r ;
//     r=n1+n2;
//     console.log(r);
// }
// sum(10,20);
function sum(x,n1,n2,y){
    console.log("first function--",x());
    let r ;
    console.log(typeof(n1));
    r=n1+n2;
    console.log(r);
    console.log("second function--",y());
}
sum(wish2,10,20,wish1);