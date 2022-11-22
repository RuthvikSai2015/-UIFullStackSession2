abstract class Abstract1{
   abstract x:number; 
   abstract m2():void;
   m3():void{
    console.log("m3");
   }
}
class ExampleAbstract extends Abstract1{
   x=10;
   public y:number=20;
   m2():void{
      console.log("m2");
   }
}
let cobj = new ExampleAbstract();
console.log(cobj);
cobj.m2(); //declared in Abstract1 defined in ExampleAbstract
cobj.m3(); //declared and defined in Abstract1

