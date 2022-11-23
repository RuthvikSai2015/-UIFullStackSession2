// class StudentFile{
//      public rollNumber : Number;
//      public name: String;
//      public xyz: String;
//      constructor(rollNumber:number,name:string){
//         this.rollNumber=rollNumber;
//         this.name = name ;
//      }
// }
// let student = new StudentFile(25,'Ram');
// console.log(student);

class StudentFile{

    public _rollNumber : any;
    public _name: any ;
    public set rollNumber(rollNumber:Number){
        this._rollNumber= rollNumber;
    }
    public get rollNumber(){
        return this._rollNumber;
    }
    public set name(name:string){
        this._name = name;
    }
    public get name(){
        return this._name;
    }
}
let student = new StudentFile();
student._rollNumber=100;
console.log(student.rollNumber);
