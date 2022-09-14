// if(true){
//     console.log("Hello World1");
//     console.log("Hello World2");
//     console.log("Hello World3");
//     console.log("Hello World4");
// }
// console.log("Hello World5");
// console.log("Hello World6");
// console.log("Hello World7");
// console.log("Hello World8");
// console.log("Hello World9");
// var num=-86;
// if(num>0){
//     console.log("Positive Number");
// }else{
//     console.log("Negative Number");
// }
// var num=0;
// if(num == 0){
//     console.log("ZERO");
// }
// else if(num>0){
//     console.log("Positive Number");
// }else{
//     console.log("Negative Number");
// }

//PS : Take a number and check and print the number of digits in it
// number is greater than 0 and number should be less than 10
// number is greater than equals 10 and number  be less than qual to 99
//Multiple IF 
var num = 8;
if (num >= 0 && num <= 9) {
    console.log("1 digit number");
} else if (num >= 10 && num <= 99) {
    console.log("2 digit number");
} else if (num >= 100 && num <= 999) {
    console.log("3 digit number");
} else if (num > 999 && num <= 9999) {
    console.log("4 digit number")
} else {
    console.log("num is greater than 4 digits");
}

if (num > 0) {
    if (num <= 9) { //num>0 && num<=9
        console.log("1 digit number");
    } else if (num < 100) {
        console.log("2 digit number");
    } else if (num < 1000) {
        console.log("3 digit number");
    }
}

//PS: if age >=18 then check if the user is having license 
//  if user is having license i have to log "user is allowed to legally drive"
//  else "user must have a license to legally drive"

//Check for the age >=18 and having license

// if(userAge >=18 ){
//      if(hasLicense){
//         console.log("You are allowed to legally drive")
//      }else{
//         console.log("You must have a license to legally drive")
//      }
// }
// else{
//     console.log("You must be above 18")
// }
var userAge = 11;
var hasLicense = false;
if (userAge >= 18 && hasLicense) {
    console.log("you are allowed to legally bcoz your age is above 18 and you have license")
}
else {
    if (userAge >= 18) {
        console.log("you are above 18 but you dont possess valid license");
    }
    else {
        console.log("you are not above 18 and not possess valid license");
    }
}