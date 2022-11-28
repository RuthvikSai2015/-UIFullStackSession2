let order = (call_production) => {
    setTimeout(() => {
        console.log("Order is placed");
        call_production();
    }, 2000);

}
let production = () => {
    setTimeout(() => {
        console.log("Order is confirmed by restaurant");
        setTimeout(() => {
            console.log("Food is Preparing");
            setTimeout(() => {
                console.log("Order is ready");
                setTimeout(() => {
                    console.log("Order has been packed");
                    setTimeout(() => {
                        console.log("Delivery boy has picked up your order");
                        setTimeout(() => {
                            console.log("Delivery boy on the way");
                            setTimeout(() => {
                                console.log("Delivery boy has reached your home")
                                setTimeout(() => {
                                    console.log("Order is delivered")
                                }, 5000);
                            }, 3000);
                        }, 5000);
                    }, 2000);
                }, 3 * 1000)
            }, 1 * 1000)
        }, 10 * 1000)
    }, 500);
}
//callback
order(production);

