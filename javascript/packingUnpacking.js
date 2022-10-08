//Array Packing
let a = 10;
let b = true;
let c = "Apple";
let d = "Fruit"
let array1 = [a,b,c,d]; 
// console.log(array1); // 
// Array Unpacking 
 let x,y,z ;
 [x,y,z] = array1;
//   console.log(x); //10
//   console.log(y); //true
//   console.log(z); //Apple

  let group1 = [1,2,3,4,5,6,7,8,9];
  let p,q,r;
  [p,q,...r] = group1;
//   console.log(p);//1
//   console.log(q);//2
//   console.log(r); //3 4 5 6 7 8 9

  let arrayA= [1,2,3];
  let arrayB= [4,5,6];
  let arrayC = [...arrayA,...arrayB]; //1 2 3 4 5 6
  console.log(arrayC);