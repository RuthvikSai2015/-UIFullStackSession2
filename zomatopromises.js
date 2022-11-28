let restaurant_is_opened = true;

let order = (time, production) => {

    return new Promise((resolve, reject) => {
        if (restaurant_is_opened) {
            setTimeout(() => {
                resolve(production())
            }, time);

        } else {
            reject(console.log("restaurant is not currently accepting the orders"));
        }
    })
}
let production = () => {
}

order(2000, () => { console.log("Order is placed") });
