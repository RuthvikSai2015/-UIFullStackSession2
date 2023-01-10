var express = require('express');
var person = require('./person');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render("home");
 // res.render('index', { title: 'Express' });
});
//create page1.ejs
//create page2.ejs  pass some json data 
router.get('/page1',function(req,res){
  res.end("Welcome to Page1");
})
router.get('/page2',function(req,res){
  res.end("Welcome to Page2");
})
router.get('/login',function(req,res){
  res.send("Success");
})

router.get("/register",(req,res) => {
  res.render("register");
})

router.post("/regsuccess",(req,res) =>{
  console.log("request----",req.body.personEmail);
  let personEmail = req.body.personEmail;
  res.render("registersuccess",{personEmail:personEmail})
})
//Import User defined Module
router.get('/home',function(req,res){
 // let x = 100; let y = 'Apple';
 console.log("person-----",person.personAge);
 //loop Array of objects 
  res.render("home",{personAge:personAge,personName:personName,hobbies:hobbies,details:details});
})
module.exports = router;
