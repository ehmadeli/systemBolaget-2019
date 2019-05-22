let {$, sleep} = require('./funcs.js');
 
module.exports = function(){
 
  this.Given(/^that the products are available in the store$/, async function (callback) {
    await helpers.loadPage('http://localhost:3303/login');
  
  });

  this.When(/^I add one product to the cart$/,  async function () {
    
     
    
        
    
    
  });

  this.Then(/^i should see the product in the cart$/,async function (callback) {
     
    
  });

  this.Given(/^that the products are available in the store$/, async function (callback) {
  
    
  });

  this.When(/^I add one product to the cart$/,  async function (callback) {
    
  
  });

  this.When(/^I add one other product to the cart$/,  async function (callback) {
    
    
  });


  this.Then(/^I should see the products in the cart$/, async function (callback) {
    

  });

  this.Given(/^that the products are available in the store$/,  async function (callback) {
    
  });

  this.Given(/^I add one product that is out of stock to the cart$/, async function (callback) {
    
  });

  this.Then(/^the page should show a message$/,  async function (callback) {
    

  });



}