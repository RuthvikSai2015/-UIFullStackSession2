let fruits = [];
function showFruits() {
    //document.getElementById("fruitsUl").innerHTML = fruits;
    let response = '';
    for (let i = 0; i < fruits.length; i++) {
        response = response + '<li>' + fruits[i] + '</li>';
    }
    document.getElementById("fruitsUl").innerHTML = response;
}
function addFruit() {
    fruits.push(document.getElementById("fruitName").value);
    //fruits.unshift(document.getElementById("fruitName").value);
    //showFruits();
}
function deleteFruit() {
    //fruits.pop();
    let deleteValue = document.getElementById("deleteInput").value;
    let index = fruits.indexOf(deleteValue);
    if(index > -1){
        fruits.splice(index,1);
    }
    showFruits();
}
// function searchFruit() {
//     let searchValue = document.getElementById("searchFruit").value;
//     let flag= false;
//     for (let i = 0; i < fruits.length; i++) {
//         // if(fruits[i] == searchValue){
//        // if(fruits[i].startsWith(searchValue)){
//         if(fruits[i].endsWith(searchValue)){
//            document.getElementById("d1").innerHTML = fruits[i];
//            flag= true;
//          }
//     }
//     if(!flag){
//         document.getElementById("d1").innerHTML = "No Value found";
//     }

// }
function searchFruit() {
    let response='';
    let searchValue = document.getElementById("searchFruit").value;
    let newArray = fruits.filter(fruit => fruit.includes(searchValue));
    newArray.forEach(fruit =>{
        response += '<li>'+fruit+'</li>';
    })
    document.getElementById("d1").innerHTML = response;

}
function loadFruits(){
    fruits.splice(0,0,"Yellow Banana","Red Banana","Red Apple","Green Apple","Green Mango","Yellow Mango");
    showFruits();
}