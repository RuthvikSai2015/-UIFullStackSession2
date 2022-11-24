import { personAge,personName } from './sample';
import {Calculator as c} from './sample';
import {GoodBye} from './sample';

console.log(personAge,personName);
let obj = new c(10,40);
console.log(obj.doSum());
console.log(obj.doSub());
GoodBye();