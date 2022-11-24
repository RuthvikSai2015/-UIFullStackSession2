let age:Number = 10;
console.log(age);

let x:any = 'Apple';
let y: any[] | undefined;
let obj:any | undefined;
let str:string | undefined;
//let y: any[] = [];
console.log(x);

//y = [100,200];
obj = { a:1 ,b:2 ,c:3}
console.log(typeof(y));
console.log(typeof(str));
console.log(obj);

// function showMsg():void {
//     console.log("Hello");
//   }
//   showMsg();

  //with parameters
function showMsg(text:string):void{
    console.log(text);
}
showMsg("Good Evening");

function doSum(n1:number,n2:number):number{
    return (n1+n2);
}
let add = doSum(3,5);
console.log(add);