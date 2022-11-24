class Addition{
    public doSum(num1:number,num2:number):number{
          return num1+num2;
    }
    public static doSub(n1:number,n2:number):number{
        return n1-n2;
    }
}
let obj=new Addition();
//Access Instance method by using object name
console.log(obj.doSum(45,56));
//obj.doSub(45,34);
//Access static method by class name
console.log(Addition.doSub(34,56));
