function checkAge() {
    var age = document.getElementById("ageValue").value;
    try {
        if (age == "") {
            throw "Age should not be empty";
        }
        if (isNaN(age)) {
            throw "Please enter a valid number"
        }
        if (age < 0) {
            throw "age should be positive number";
        }
        if (age < 18 || age >= 100) {
            throw "Invalid Age for voting";
        } else{
            throw "valid Age for voting";
        }
    } catch (error) {
        document.getElementById("p1").innerHTML = error;
    }finally{
        console.log("END");
    }
}