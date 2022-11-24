 function decorator1(constructor:Function){
     console.log('Decoration Started with Flowers');
 }

@decorator1
class StageDecor{
    public height:number = 200;
    public width:number = 100;
    constructor(){
        console.log(`Objects Creation without decoration`);
    }
}
let stgobj = new StageDecor();
console.log(stgobj);