import { personAge } from './sample';
import {Calculator as calc} from './sample';

console.log(personAge);
let obj = new calc(10,40);
console.log(obj.doSum());
console.log(obj.doSub());