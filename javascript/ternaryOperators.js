const pi=3.14;
var areaOfCircle,radius;
    radius= -3.6;
    if(radius>0){
        areaOfCircle = pi * radius * radius;
    }else{
        console.log("Area cannot be calculated for Negative Radius");
    }
    console.log(radius>0?pi*radius*radius:"Area cannot be calculated for Negative Radius");
    console.log("The area of circle is",areaOfCircle);
    