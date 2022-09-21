//var userChoice = 6;
// switch (userChoice) {
//     case 1: console.log("AC");
//             break;
//     case 2: console.log("FAN");
//             break;
//     case 3: console.log("LIGHT");
//             break;
//     default: console.log("none of them are switched on");
//              break;
// }
//Simple Calculator
// var num1=25,num2=5;
// var userChoice = '%';
// switch(userChoice){
//         case '+': console.log("Addition --",num1+num2);
//                   break;
//         case '-': console.log("Subtraction --",num1-num2);
//                   break;
//         case '*': console.log("Multiplication --",num1*num2);
//                   break;
//         case '/': console.log("Division --",num1/num2);
//                   break;
//         default : console.log("Invalid choice");
//                   break;
// }

//mini ATM Example
var accountBalance = 1500, depositAmount = 500, withdrawalAmount = 2500;
var userChoice = 'withdraw';
switch (userChoice) {
        case 'accountbalance': console.log("Your Account Balance is ", accountBalance);
                break;
        case 'deposit': accountBalance += depositAmount;
                console.log("Deposit done and your updated balance is ", accountBalance);
                break;
        case 'withdraw': if (accountBalance > withdrawalAmount) {
                accountBalance -= withdrawalAmount;
                console.log("withdrawal done and your updated balance is ", accountBalance);
        }
        else {
                console.log("Insufficient funds");
        }
           break;
        case 'ministatement': console.log("Mini statement is after withdrawal and deposit---", accountBalance)
                break;
        default: console.log("Invalid Choice(account doesnt exist,server error,card not supported)");
                break;
}
