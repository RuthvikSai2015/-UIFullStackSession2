let laptop = {
    "company": "dell",
    "cost": 45000,
    "color": "black",
    "stores": ['Majestic', 'K R Puram', 'Anand Nagar'],
    "memory": {
        "ram": "8GB",
        "rom": "1TB"
    }
}
// for(let x in laptop){
//    // console.log(laptop[x]);
//  //  company key value is dell 
//  // console.log(laptop.toString());
//    console.log(`${x} key value is: ${laptop[x]}`);
// }
laptop["os"] = "windows";
laptop["screen size"] = {
    "height": 1500,
    "width": 750
}
laptop["company"]="lenovo";
delete laptop["screen size"]["height"];
// console.log(laptop);

console.log(`All keys are ${Object.keys(laptop)}`);
console.log(`All values are : ${Object.values(laptop)}`);
console.log(`All keys and values are : ${Object.entries(laptop)}`);



