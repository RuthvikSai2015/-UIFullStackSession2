// var n=4,sum=0;
// for(var i=1;i<=n;i++)
// {
//     sum+=i; //i=1 sum=1,i=2 sum=3,i=3 sum=6,i=4 sum=10
// }
// console.log(sum);
// //Factorial
// var n=5,fact=1;
// for(var i=n;i>=1;i--){
//   fact = fact*i;
// }
// console.log(fact);
//Table of numbers

// var n=5;
// for(var i=1;i<=10;i++){
//     console.log(n,'*',i,'=',(n*i));
// }
//factors of a number
// var n=40;
// for(var i=1;i<=(n/2);i++){
//   //  console.log(i);
//     if(n%i == 0){
//        console.log(i);
//     }
// }
// console.log(n);
//Fibonacci series
var firstNum=0,secondNum=1;
		console.log(firstNum);
        console.log(secondNum);
		for(var i=1;i<=8;i++){
	      var nextNumber = firstNum+secondNum;
		  console.log(nextNumber);
		  firstNum = secondNum;
		  secondNum = nextNumber;
	    }