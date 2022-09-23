//deposit and withdram => balanceInAccount

let balanceInAccount = 1000; //Global Variable
function deposit(depositAmount) {
    balanceInAccount += depositAmount; //depositAmount is Local Variable
    console.log("After deposit balance--- ", balanceInAccount);
}
function withdraw(withdrawAmount) {
    //   5000>1000
    if (withdrawAmount > balanceInAccount) {
        console.log("Insufficient funds")
    } else {
        balanceInAccount -= withdrawAmount; //withdrawAmount is Local Variable
        console.log("After withdrawing amount of ",withdrawAmount," balance is---"+balanceInAccount);
    }
}
deposit(1000);
withdraw(500);
