let order = (call_production) => {
    setTimeout(() => {
        console.log("Order is placed");
        call_production();
    },2000);
   
}
let production = () => {
    setTimeout(()=>{
        console.log("Order is confirmed by restaurant")
    },500);
}
//callback
order(production);

