class LocationEmp{
    constructor(public latitude:number,public longitude:number){

    }
}
class Address{
    constructor(public houseNumber:string,public city:string,public pincode:number,public location:LocationEmp){
    }
}

class Employee {
    //DATA
    
    constructor(public empname:string,public empage:number,public maritalStatus:boolean,
        public height:number,public hobbies:string[],public address:Address){
    }
    //Methods
    public showEmployeeName() {
        console.log(`Employee Name is ${this.empname}`);
    }
    public showEmployeeAge() {
        console.log(`Employee age is ${this.empage}`);
    }
    public hobbiesEmployees(){
        //Ram's hobbies are singing,playing 
        console.log(`${this.empname}'s hobbies are }`);
        this.hobbies.forEach((hobby) => {
            console.log(hobby);
        })
    }
    public showAllInfo(){
        //EmpName :   EmpAge  MaritalStatus: height
        console.log(`Employee Name :  ${this.empname} \n`);
        console.log(`Employee Age:   ${this.empage} \n`);
        console.log(`Marital Status:   ${this.maritalStatus} \n`);
        console.log(`Employee Height:   ${this.height} \n`);
        console.log(`House Number----------${this.address.houseNumber}`);
        console.log(`City----------${this.address.city}`);
        console.log(`Pin Code----------${this.address.pincode}`);
        console.log(`${this.empname}'s hobbies are }`);
        this.hobbies.forEach((hobby) => {
            console.log(hobby);
        })
        console.log(`location of employee--${this.address.location.latitude}`);
        console.log(`location of employee--${this.address.location.longitude}`);
    }
}
let emplocation = new LocationEmp(12.4,54.5);
let address = new Address('5-1',"Bangalore",560036,emplocation)
let emp = new Employee('Savitha',28,true,4.7,['singing','playing','dancing'],address);
// emp.showEmployeeName();
// emp.showEmployeeAge();
//emp.hobbiesEmployees();
emp.showAllInfo();