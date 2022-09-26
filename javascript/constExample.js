// const x = 100;
// function one() {
//     var y = 10;
//     console.log(y);
// }
// function two() {
//     const z = 30;
//     console.log(z);
// }
// function three() {
//     let a = 40;
//     console.log(a);
// }
// console.log(x);
// //console.log(y);
// //console.log(z);
// //console.log(a);
// one();
// two();
// three();
// //one();


// var age=22;
// var age=23;      //redeclaration
// console.log(age);

// let height=6.2;
// let height=6.7; //redclaration is not possible using let
// console.log(height);

// function one(){
//     x=100
//     console.log(x);
// }
// one();
// var x;

// function one(){
//     x=100
//     console.log(x);
// }
// one();
// let x;

// x=10;
// console.log(x);
// let x;

// function doSomething(){
//     console.log(a);
//     let a;
// }
// doSomething();

function one(){
    var x=100;
    var y=200;
    if(true){
        var v1=10;
        let v2=20;
        console.log("inside if, ",v1,v2);
    }
    // console.log("outside if-- ",v1,v2);
}
// function two(){
//     let b;
//     console.log(b);
// }
one();
