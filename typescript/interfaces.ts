interface I1{}
interface I2{}
interface I3{}

class Example{}

interface I4{
    x:number;
    method1():void;
}

class Sample implements I4,I3{
    x=50;
    method1(): void {
        console.log(this.x);
        console.log("Sample Class");
    }
}
let obj1 = new Sample();
obj1.method1();