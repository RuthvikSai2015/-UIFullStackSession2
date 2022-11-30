// let restaurant_is_opened = true;

// let order = (time, production) => {
//     return new Promise((resolve, reject) => {
//         if (restaurant_is_opened) {
//             setTimeout(() => {
//                 resolve(production())
//             }, time);

//         } else {
//             reject(console.log("restaurant is not currently accepting the orders"));
//         }
//     })
// }
// let production = () => {
// }

// order(2000, () => { console.log("Order is placed") })
// .then(()=>{
//   return order(500, () => {console.log("Order is confirmed by restaurant")})
// })
// .then(()=> {
//    return order( 10000, () => {console.log("Food is preparing ")})
// })
// .then(()=>{
//     return order(1000,()=>{console.log("order is ready")})
// })
// .then(()=>{
//     return order(3000,()=>{console.log("order has been packed")})
// })
// .catch(()=>{
//     console.log("restaurant is offline");
// }).
// finally(()=>{
//     console.log("finally block is offline");
// })

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });
   
myPromise
  .then((value) => `${value} and bar`)      // 1 and bar
  .then((value) => `${value} and bar again`) // 1 and bar and bar again
  .then((value) => `${value} and again`) // 1 and bar and bar again and again
  .then((value) => `${value} and again`) // 1 and bar and bar again and again and again 
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });