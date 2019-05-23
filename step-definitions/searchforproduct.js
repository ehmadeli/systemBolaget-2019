
//let Product = require('../www/js/product.js');
//let ProductCart = require('../www/js/productcart.js');
//let data = require('../www/json/sortiment.json');
//var Fuse = require('fuse.js');
//const App = require('../views/js/app.js');
let {$, sleep} = require('./funcs.js');

module.exports = function(){

 // let products = [];
 // let app = new App();
 // let prodCart = new ProductCart();
 

 this.Given(/^that i am on the page localhost:(\d+)$/, async function (portnumber)  {
  // Write code here that turns the phrase above into concrete actions
  await helpers.loadPage('http://localhost:'+ portnumber +'/categories.html');
  await sleep(3000);
});

this.When(/^I search for "([^"]*)"$/,async  function (searchPhrase) {
  // Write code here that turns the phrase above into concrete actions
  let searchField = await $('#myInput');
 await searchField.sendKeys(searchPhrase);
  await sleep(5000);
});

this.Then(/^i should get a list of products with names that matches$/,async function () {
  // Write code here that turns the phrase above into concrete actions
  let searchResultsBody = await $('.product_name a');
 await searchResultsBody.click();
//await driver.findElement(By.linkText("renat")).click();
  await sleep(2000);
});


  }

 
module.exports = function(){

  // let products = [];
  // let app = new App();
  // let prodCart = new ProductCart();
  
 
  this.Given(/^that i am on the page localhost:(\d+)$/, async function (portnumber)  {
   // Write code here that turns the phrase above into concrete actions
   await helpers.loadPage('http://localhost:'+ portnumber +'/categories.html');
   await sleep(3000);
 });
 
 this.When(/^I search for "([^"]*)"$/,async  function (searchPhrase) {
   // Write code here that turns the phrase above into concrete actions
   let searchField = await $('#myInput');
  await searchField.sendKeys(searchPhrase);
   await sleep(5000);
 });
 
 this.Then(/^i should get a list of products with names that matches$/,async function () {
   // Write code here that turns the phrase above into concrete actions
   let searchResultsBody = await $('.product_name a');
  await searchResultsBody.click();
 //await driver.findElement(By.linkText("renat")).click();
   await sleep(2000);
 });
 
 
   }
   