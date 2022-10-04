function doSomething() {
    let person1Age = 25;
    let person2Age = 30;
    let person3Age = 45;
    let person4Age = 50;

    //let personAges = [25, 22, 45, 50, 45, 20, 60]
    //     let array1 = new Array();
    //     array1[0] = 10;
    //     console.log(array1);
    //     console.log(personAges[0])

    //    let employee = ['Ajay',35,75000.99,true];
    //    console.log(employee);
    // for (let i = 0; i <= personAges.length - 1; i++) {
    //     console.log(personAges[i]);
    //     if (personAges[i] % 2 == 0) {
    //         console.log(i, "index value is", personAges[i]);
    //     }
    // }
    // let personAges = [25, 22, 45, 50, 45, 20, 60]
    // console.log(personAges[personAges.length-1])
    // personAges[1]=23;  //update value 
    // personAges = [11,22,33,44]; //re-assignment
    // console.log(personAges);
    // let date = new Date();
    // console.log(date);

    let items = [250,500];
    const newLength = items.push(100); //add elements at end of array
    console.log(items);
    console.log(newLength); //one more option to get the length of new array
    items.unshift(300);
    console.log(items);

    const poppedElement = items.pop() ;
    console.log(poppedElement);
    console.log(items);
    items.shift();
    console.log(items); 
}
function doSomethingNew(){
    let arrayA = [250,300];
    let arrayB = [150,500];
    arrayA = arrayA.concat(arrayB);
   // console.log(arrayA);
    arrayA.sort();
    //console.log(arrayA);
    arrayA.reverse();
    console.log("first as array",arrayA);
    console.log(arrayA.toString());
    arrayA = arrayA.toString();
    console.log("after conversion",arrayA);
    console.log(typeof(arrayA));
  
}
//doSomethingNew();
function doSomethingNew1(){
    let array = [10,20,30,40,50,10,20,30,50,50,90];
    //console.log(array.slice(3,7));
    console.log(array.indexOf(10)); // 0
    console.log(array.indexOf(5)); // -1 
    // if(array.indexOf(20) != -1){
    //    console.log("present")
    // }else{
    //    console.log("not present");
    // }
    console.log(array.lastIndexOf(50)); // 9

}
doSomethingNew1();
function show(element){
    console.log(element);
}
function doSomethingNew2(){
    let arrayA= [10,20,30,40,50,60,70,80];
  //  arrayA.forEach(show);
    arrayA.forEach((element) => {
        console.log(element);
    })
}
doSomethingNew2();