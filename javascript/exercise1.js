function add(){
   let n1 = document.getElementById("n1").value;
   let n2 = document.getElementById("n2").value;
   if(n1 == ''){
    alert("Please enter n1 value");
   }
   if(n2 == ''){
    alert("Please enter n2 value");
   }else{
    let result=parseInt(n1)+parseInt(n2);
    document.getElementById("result").value=result;
   }
  
}
function erase(){
    document.getElementById("n1").value='';
    document.getElementById("n2").value=''
}