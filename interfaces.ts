// interface I1{}
// interface I2{}
// interface I3{}

// class Example{}

// interface I4{
//     x:number;
//     method1():void;
// }

// class Sample implements I4,I3{
//     x=50;
//     method1(): void {
//         console.log(this.x);
//         console.log("Sample Class");
//     }
// }
// let obj1 = new Sample();
// obj1.method1();

interface I1{}
interface I2{}
interface I3{}

class Example{}

interface I1{
    x:number;
    method2():void;
}

class C1{
    x=50;
    method1(): void {
        console.log(this.x);
        console.log("Sample Class");
    }
}
class C2 extends C1 implements I1{
    method2(): void {
        let c1 = new C1();
        c1.method1();
        throw new Error("Method not implemented.");
    }
    
}