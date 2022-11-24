// function decoration1(constructor:Function){
//     console.log('Object creation inside decorator');
// }

// @decoration1
// class Stage{
//     height:number=200;
//     weight:number=72;
//     constructor(){
//         console.log('Object creation outside decorator');
//     }
// }

class Student{
    public _rollNumber:Number = 10;
    public _name:string = "savitha";
    public set rollNumber(rollNumber:Number){
        this._rollNumber=rollNumber
    }
    public get name(){
        return this._name;
    }
    public set name(name:string){
        this._name=name;
    }
}
let obj=new Student();
//obj._name="krishna";
console.log(obj._name);