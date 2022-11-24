const personName:string = 'Ajay';
const personAge:number = 32;
const personMaritalStatus:boolean = false;

const phoneNumbers:number[] = [123456789.987654321];
const accountDetails:object = {
    accountNumber:45678,
    bal:3000,
    bankName:"hdfc"
}
function WelcomeMessage(){
    console.log("Hello Welcome to Training");
}
function GoodBye(){
    console.log("Bye have a nice day");
}

class Calculator{
    constructor(public num1:number,public num2:number){

    }
    doSum():number{
        return this.num1+this.num2;
    }
    doSub():number{
        return this.num1-this.num2;
    }
}
export {personName,personAge,Calculator,GoodBye};