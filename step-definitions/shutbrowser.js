// let App = require('../views/js/app.js');
// let ProductCart = require('../views/js/productcart.js');
let {$, sleep} = require('./funcs');

module.exports = function(){

   
  this.Given(/^that I already have products in my cart$/, async function () {
    await helpers.loadPage('http://localhost:3306/categories.html');
  await sleep(3000);
  let p1 = await driver.findElement(by.css('.product_cart'))[0];
  let p2 = await driver.findElement(by.css('.product_cart'))[2];
  

  await p1.click();
  await p2.click();
  await sleep(3000);
  
  //let cart = await driver.findElement(by.xpath('/html/body/div[2]/header/div[2]/div[3]/div[3]/a'));
  let cart = await driver.findElement(by.css('.cart'));
  await cart.click();
  await sleep(3000);
  });
    
  this.When(/^I click on close-button in my browser$/, async function () {  
    // oldCart = Object.assign(app.cart);  
    // oldCart.saveProductCart('../systemBolaget-2019/www/json/productcart.json');
    //await driver.close();
  });

  this.When(/^I reopen my browser$/, async function () {
    // newCart.readProductCart('../systemBolaget-2019/www/json/productcart.json');
    await helpers.loadPage('http://localhost:3306/cart.html');
   });

  this.Then(/^I should get the same shopping cart as previous$/, {timeout: 30000}, function () {  
    
    
});


this.When(/^I click the refresh-button in my browser$/, async function () {
  // Test 
  
  });

  this.Then(/^I should get the same shopping cart as previous one$/, async function () {
       
  });

}
