// var a=10+20;
// console.log("a--------"+a);
// document.write("Welcome to the javascript session");
// alert("Welcome to the javascript session");
// confirm("Welcome to the javascript session");     
// console.log("Welcome to the javascript session")

// var x=10;
// console.log("Number 1-----",typeof(x));
// x=9.6;
// console.log("Number 2-----",typeof(x));
// x=false
// console.log("data type1-----",typeof(x));
// x="krishna"
// console.log("data type2-----",typeof(x));

// var n1,n2,t;

// n1 = 100;
// n2 = 200;
// console.log(n1,n2);
// t = n1; // t=100
// n1 = n2 // n1=200
// n2 = t // n2 = 100
// console.log(n1,n2);

// var x= 200;
// console.log(x+=100); // x=x+100 300

// console.log(x-=50); //x=x-50 250
// console.log(x*=4); // x=x*4 1000
// console.log(x/=100); // x=x/100 10
// console.log(x/=30); // 0.33
// console.log(x%=10); // 0.33

var a1 = true, a2 = false, a3 = true;
console.log(a1 && a2); //false
console.log(a2 && a3); // false
console.log(a1 && a3); // true
console.log(a1 && a2 && a3); //false
console.log(a1 || a2); // true
console.log(a1 || a3);//true
console.log(a1 || a2 || a3); //true
console.log(a1 || a2 && a3); //true
console.log(a1 || a2 && !a3); //false

//Bitwise Operators
var b = 60;
console.log(b >> 2);

//<<,>>

// console.log(10<<2) ;// n<<s => n*2^s = 10*2^2 => 40
// var c = 40;
// console.log(c<<2) ; //40 * 2^2 => 160
// var d= 40;
// console.log(d>>3); // n>>s => n/2^s 40/2^3 => 5
var b = 60;
console.log(b >> 3); //n>>s => 60/2^3 => 60/8 

var a = 12, b = 7

console.log(a - ~b - 1); //12 - (-8) -1 => 12+8-1 => 19
console.log(a + ~b + 1); //12 +(-8) +1 => 5

var age = 100;
//age should be greater than 18 and less than 100
if (age > 18 && age <100) {
        console.log("valid");
} else {
        console.log("not valid");
}






