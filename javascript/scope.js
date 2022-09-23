let z=500;    //global variable
function one(){
    var x=100;  //local variables
    console.log(x);
    console.log(z);
}
one();

function two(){
   var y=200;  //local variables
   console.log(y);
   console.log(z);
}
two();