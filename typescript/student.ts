class Student{
     fullName:string
    public constructor(name:string){
      this.fullName= name;
    }
    public showName(){
       console.log(`name is ${this.fullName}`); 
    }
}
let student1 = new Student("Krishna Kumar");
student1.showName();
console.log(student1.fullName);
