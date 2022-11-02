let addition = {
     n1 :    document.getElementById("n1").value,
     n2 :    document.getElementById("n2").value,
     doSum : function(){
             console.log("in do sum function");
             document.getElementById("result").innerHTML=eval(this.n1)+eval(this.n2);
     }
}
//. [] ?. 
console.log(addition.n1);
console.log(addition.n2);
console.log(addition.doSum());
function addFunction(){
    addition.n1 =  document.getElementById("n1").value;
    addition.n2 =  document.getElementById("n2").value;
    addition.doSum();
}

// let employee = {
//        id: 1,
//        name : 'Krishna',
//        salary : 50000,
//        showEmployee : function(){
//              // 1 Krishna has salary of 50000
//            return `${this.id} ${this.name} has salary of ${this.salary}`;
//        }
// }
// console.log(employee.showEmployee());