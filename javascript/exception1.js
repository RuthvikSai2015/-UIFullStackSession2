// let x= 100;
// let z = 50;
// console.log(x);
// // console.log(y);
// console.log(z);

// let ar = [1,2]
// console.log(ar[5]); // undefined error

// let s = "Apple";
// console.log(s*s); //NaN

try {
    //   let y = 10;  
    //  let s="Apple";
    console.log(s*s);
    console.log(y);
} catch (exception) {
    console.log("in catch--", exception.message);
}finally{
  console.log("finally block");
}

// try{
//     // var x= 500;
//      console.log(x);
// }catch(exception){
//     console.log(exception.message)
// }
// finally{
//     console.log('END')
// }