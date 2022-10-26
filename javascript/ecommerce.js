let foodItems = [];
function addItem() {
    let food = {
        "itemName": document.getElementById("itemName").value,
        "itemCost": document.getElementById("itemCost").value,
        "itemQuantity": document.getElementById("itemQuantity").value
    }
    foodItems.push(food);
    showItems();
}
function showItems() {
    let response = '';
    response += '<thead><tr>';
    response += '<th> Item Name </th>';
    response += '<th> Item Cost </th>';
    response += '<th> Item Quantity </th>';
    response += '</tr></thead>';
    response += '<tbody>';
    for (let i = 0; i < foodItems.length; i++) {
        response += '<tr>';
        response += '<td>' + foodItems[i].itemName + '</td>';
        response += '<td>' + foodItems[i].itemCost + '</td>';
        response += '<td>' + foodItems[i].itemQuantity + '</td>';
        response += '</tr>'
    }
    response += '</tbody>';
    document.getElementById("resultTable").innerHTML = response;
}
function loadDummyItems() {
    let dummyFoodItems = [
        {
            "itemName": "Dosa", "itemCost": 30, "itemQuantity": 4
        },
        {
            "itemName": "Chicken", "itemCost": 60, "itemQuantity": 4
        },
        {
            "itemName": "Butter Chicken", "itemCost": 180, "itemQuantity": 6
        },
        {
            "itemName": "Idli", "itemCost": 10, "itemQuantity": 30
        }
    ]
    foodItems = foodItems.concat(dummyFoodItems);
    showItems();
}
function showTotal() {
    let costData = foodItems.map(item => item.itemCost);
    let result = costData.reduce((n1, n2) => (n1 + n2));
    document.getElementById("totalCost").innerHTML = result;
}
function get5PrecentGST(){
    foodItems.forEach(item =>{
        let discount = (item.itemCost*5)/100;
        item.itemCost = item.itemCost+discount;
    })
    showItems();
}
function greater30Items(){
    let newArray = foodItems.filter(item => item.itemCost>30);
    let response = '';
    newArray.forEach(res =>{
       response += '<li>'+res.itemName+'</li>';
    })
    document.getElementById("greater30").innerHTML = response;
}