

// Adding elements : 1,2,3 from 0 index => 1,2,3,10,20,30,40,50

// numbers.splice(0,0,1,2,3);

// console.log(numbers);

// Add Elements 55,66 after 3rd index => 10 20 30 55 66 40 50 

// numbers.splice(3,0,55,66);

// console.log(numbers);

//Add Elements 100,200,300 after 5th index => 10 20 30 40 50 100 200 300

// numbers.splice(5,0,100,200,300);
// console.log(numbers);

// let numbers = [10,20,30,40,50];

// Removing the Elements 
//delete 2 elements from 0 index

// let deletedNumber = numbers.splice(0,2); // 30 40 50  
// console.log(numbers);   //30 40 50 
// console.log(deletedNumber);  // 10 20

//delete 3 elements from starting index 0 
// numbers.splice(3,3);
// console.log(numbers);

// Remove Elements and add at the same time

let numbers = [10,20,30,40,50];

//remove first 2 elements and add 5,55 => 5 55 30 40 50 
// let deletedNumber = numbers.splice(0,2,5,55);
// console.log(deletedNumber);
// console.log(numbers);

//remove last 2 elements and add 1 2 3 4 5

// numbers.splice(3,2,1,2,3,4,5); 
// console.log(numbers);

numbers = numbers.join(' ');
console.log(numbers);
console.log(typeof(numbers));

