class Employee {

    public empname: string;
    public empage: number;
    public maritalStatus: boolean;
    public height: number;
    
    constructor(name:string,age:number,maritalStatus:boolean,height:number){

        this.empname = name;
        this.empage = age;
        this.maritalStatus = maritalStatus;
        this.height = height;
    }
    public showEmployeeName() {
        console.log(`Employee Name is ${this.empname}`);
    }
    public showEmployeeAge() {
        console.log(`Employee age is ${this.empage}`);
    }
    public hobbies(hobbies: string){
        //Ram's hobbies are singing,playing 
        console.log(`${this.empname}'s hobbies are ${hobbies}`);
    }
    public showAllInfo(){
        //EmpName :   EmpAge  MaritalStatus: height
        console.log(`Employee Name :  ${this.empname} \n`);
        console.log(`Employee Age:   ${this.empage} \n`);
        console.log(`Marital Status:   ${this.maritalStatus} \n`);
        console.log(`Employee Height:   ${this.height} \n`);
    }
}
let emp = new Employee('Savitha',28,true,4.7);
// emp.showEmployeeName();
// emp.showEmployeeAge();
emp.hobbies("Singing,Playing,Dancing");
emp.showAllInfo();