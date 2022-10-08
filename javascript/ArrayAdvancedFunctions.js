let numbers = [10,20,30,40,50,60];

// map() Add value 2 to each number in numbers -- [12,22,32,42,52,62]

numbers.map(function(num){num=num+2});

let result = numbers.map((num) => num=num+2);
// console.log(result);

//reduce()  Sum of all elements 210
 let result1 = numbers.reduce((a,b) => a+b);
//  console.log(result1);

//filter()  Return elements greater than 35 -- 40 50 60
let result2 = numbers.filter(num => num>35);
// console.log(result2);

let studentAges = [15,10,8,12,20,9];

console.log(studentAges.some(age => age>18));

//studentAges = [20,22];

console.log(studentAges.every(age => age>18));

let resultData = studentAges.find(age => age>18);
console.log(resultData);