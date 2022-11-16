class ParentEmployee{
    constructor(protected id:number,protected name:string,protected age:number,protected city:string){
       console.log(`Parent Employee`)
    }
 
}
class RegularEmployee extends ParentEmployee{
    constructor(id:number,name:string,age:number,city:string,protected salary:number,protected bonus:number){
       super(id,name,age,city);
       console.log(`Regular Employee Id : ${this.id} name:${this.name} salary: ${this.salary} bonus:${this.bonus}`)
    }
}
class SoftwareMaintenance extends RegularEmployee{
    constructor(id:number,name:string,age:number,city:string, salary:number, bonus:number,private maintenance:string)
    {
        super(id,name,age,city,salary,bonus);
        console.log(`Software Maintenance Employee : ${this.id} name:${this.name} salary: ${this.salary} bonus:${this.bonus} maintenance: ${this.maintenance}`)
    }
}
class ContractEmployee extends ParentEmployee{
    constructor(id:number,name:string,age:number,city:string,private payperhour:number,private duration:number){
        super(id,name,age,city);
        console.log(`Contract Employee Id : ${this.id} name:${this.name} salary: ${this.payperhour} duration:${this.duration}`)
     } 
}
// let regularEmployee = new RegularEmployee(1,"raj",32,"bangalore",23000,5000);
// let contractEmployee = new ContractEmployee(1,"krishna",32,"hyd",500,45);
let softwareMaintenance = new SoftwareMaintenance(1,"kumar",32,"delhi",500,45,"lab")
