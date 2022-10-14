let student = {
    "rollNumber": 501,
    "age": 23,
    "height": 6.2,
    "weight": 54,
    "percentage": 78.63,
    "grade": 'A',
    "firstName": "Krish",
    "lastName": "Kumar",
    "hobbies": ['Singing', 'dancing', 'cooking'],
    "phoneNumbers": [9876543212, 123456789],
    "languages": ['English', 'Hindi'],
    "address": {
        "hNo": "5-8/36",
        "roadNumber": 8,
        "street": "K R Puram",
        "pincode": 560043
    }
}
let laptop = {
    "company": "dell",
    "cost": 45000,
    "color": "black",
    "stores":['Majestic','K R Puram','Anand Nagar'],
    "memory":{
        "ram":"8GB",
        "rom":"1TB"
    }
}
//Nested Objects
// console.log(laptop.memory.ram);
// console.log(laptop["memory"]["ram"]);
// console.log(laptop?.memory?.ram);

//Accessing Array Elements inside Object
// console.log(laptop["stores"][0]);
// console.log(laptop["stores"][1]);
// console.log(laptop["stores"][2]);

// for(let i=0;i<laptop["stores"].length;i++){
//     console.log(laptop["stores"][i]);
// }

// laptop["stores"].forEach(ele =>{
//     console.log(ele);
// });

// //Object.propertyName(key)
// console.log(laptop.company);
// console.log(laptop.cost);
// console.log(laptop.color);

// //Object["key"]
// console.log(laptop["company#"]);
// console.log(laptop["cost"]);
// console.log(laptop["color"]);

// //object?.propertyName
// console.log(laptop?.company);
// console.log(laptop?.cost);
// console.log(laptop?.color);