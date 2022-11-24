class Student{
    static trainerName:string = "Savitha";
    static trainerExp:number = 8;
    //static
    static courseName:string = "Ui Fullstack";
    //static readonly 
    static readonly courseFees:number = 7000;
    static instituteName:string = "Ashok IT";
    // Instance Variables
    constructor(public rollNumber:number,public name:string,public phoneNumber:number){

    }
}
//instance variables by object name
let student1 = new Student(32,"ajay",6547893421);
console.log(student1.phoneNumber);
//access static variables
console.log(Student.trainerName);
console.log(Student.trainerExp);
console.log(Student.courseName);
console.log(Student.courseFees);
console.log(Student.instituteName);
