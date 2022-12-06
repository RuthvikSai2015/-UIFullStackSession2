async function wish(){
    return "Welcome";
    await wish();
}
async function DoWork(){
    return await wish();
}
DoWork().then((str1) =>{
    console.log(str1);
    return str1+" Good Morning";
}).then((str2)=>{
    console.log(str2);
    return str2 + "Good day";
}).then((str3)=>{
  console.log(str3);
})