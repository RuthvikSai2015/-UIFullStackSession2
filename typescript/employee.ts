class LocationEmp{
    constructor(public latitude:number,public longitude:number){

    }
}
class Address{
    constructor(public houseNumber:string,public city:string,public pincode:number,public location:LocationEmp){
    }
}
class Company{
    constructor(public companyName:string,public doj:string,public dor:string){

    }
}
class Employee {
    //DATA
    // previousExperience : Company[]
    //phoneNumber : number[]
    constructor(public empname:string,public empage:number,public maritalStatus:boolean,
        public height:number,public hobbies:string[],public address:Address,public previousExp: Company[]){
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
        this.previousExp.forEach((company) => {
            console.log(`company name: ${company.companyName}`);
            console.log(`date of joining : ${company.doj} `);
            console.log(`date of releiving : ${company.dor} `);
        })
    }
}
let emplocation = new LocationEmp(12.4,54.5);
let address = new Address('5-1',"Bangalore",560036,emplocation);
let company1 = new Company('TCS','12/12/2009','10/09/2010');
let company2 = new Company('L&T','12/12/2010','10/09/2012');
let companyDetails : Company[] = [];
companyDetails.push(company1);
companyDetails.push(company2);
let emp = new Employee('Savitha',28,true,4.7,['singing','playing','dancing'],address,companyDetails);
// emp.showEmployeeName();
// emp.showEmployeeAge();
//emp.hobbiesEmployees();
emp.showAllInfo();