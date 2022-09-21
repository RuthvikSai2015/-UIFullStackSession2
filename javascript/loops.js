// var i = 1
// while (i <= 9) {
//     console.log(i);
//     i += 2;
// }
// var i=1;
// do{
//       console.log(i);
//       i+=2;
// }while(i<=9)

// for(var i=1;i<=9;i+=2)
// {
//     console.log(i);
// }

// var i=10;
// while(i<=100){
//     console.log("Hi from do while");
//     i++;
// }

// var j=10;
// do{
//     console.log("Hi from do while");
//     j++;
// }while(j<=100)

// for(var k=10;k<=100;k++){
//     console.log("Hi from for");
// }

// for(var i=1;i<=10;i++){
//     console.log("i======= ",i)
//     if(i==2)
//        break;
//     else  
//        console.log(i);
// }		
// console.log("after break");


// for (var i = 1; i <= 10; i++) {
//     //console.log("i======= ", i)
//     if (i == 5 || i==7)
//         continue;
//     else
//         console.log(i);
// }
// console.log("after continue");
//odd numbers between 1 and 10
// for(var i=1;i<=10;i++){
//     if(i%2 == 0)
//       continue;
//     else  
//       console.log(i);
// }

// var num=100;
// 	var rem;
// 	while(num>0){
// 	  rem=num%10;
// 	  console.log(rem);
// 	  num=Math.floor(num/10);
// 	 }

//Sum of digits
// var num = 7532;
// var rem;
// var sum=0;
//   while(num>0){
//     rem = num%10;
//     sum +=rem;
//     num = Math.floor(num/10);
//   }
//  console.log(sum);


var num = 9638;
var rem;
var rev = 0;
var temp=num;
while (num > 0) {
    rem = num % 10;
    rev = (rev * 10) + rem;
    num = Math.floor(num / 10);
}
console.log("reverse value----",rev);
console.log("temp value----",temp);
//I1            //I2           //I3               //I4
//   9638>0          963>0           96>0            9>0
//   rem=8           rem=3           rem=6           rem=9
//   x=(0*10)+8      x=(8*10)+3      x=(83*10)+6     x=8369
//   num=963         num=96          num=9           num=0



