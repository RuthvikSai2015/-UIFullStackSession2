class Employee_New {
    //Data + Constructor
    //Methods
    public constructor(public empname:string,public empage:number,public maritalStatus:boolean,
        public height:number){
   
      }
    public showEmployeeInfo(){
      console.log(`Name : ${this.empname} Age: ${this.empage} maritalStatus: ${this.maritalStatus} height: ${this.height}`)
    }
    }
    //Object Creation
    let emp1 = new Employee_New('Krishna',35,true,6.3);
    emp1.showEmployeeInfo();