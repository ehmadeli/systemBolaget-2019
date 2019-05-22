let App = require('../views/js/app.js');
let ProductCart = require('../views/js/productcart.js');

module.exports = function(){

   
  this.Given(/^that I already have products in my cart$/, function () {
    await helpers.loadPage('http://localhost:3306/categories.html');
  await sleep(3000);
  let p1 = await driver.findElement(by.xpath('/html/body/div[2]/div/div[3]/div[1]/div[2]/div[1]/div/div/div[3]/div/div[2]'));
  let p2 = await driver.findElement(by.xpath('/html/body/div[2]/div/div[3]/div[1]/div[2]/div[2]/div/div/div[3]/div/div[2]'));
  
  await p1.click();
  await p2.click();
  await sleep(3000);
  
  let cart = await driver.findElement(by.xpath('/html/body/div[2]/header/div[2]/div[3]/div[3]/a'));
  await cart.click();
  await sleep(3000);
  });
    
  this.When(/^I close my browser$/, {timeout: 30000}, function () {  
    // oldCart = Object.assign(app.cart);  
    // oldCart.saveProductCart('../systemBolaget-2019/www/json/productcart.json');
    await.driver.close();
  });

  this.When(/^I reopen my browser$/, {timeout: 30000}, function () {
    // newCart.readProductCart('../systemBolaget-2019/www/json/productcart.json');
    await helpers.loadPage('http://localhost:3306/cart.html');
   });

  this.Then(/^I should get the same shopping cart as previous$/, {timeout: 30000}, function () {  
    
    
});


this.When(/^I refresh my browser$/, function () {
  // Test 
  
  });

  this.Then(/^I should get the same shopping cart as previous one$/, function () {
       
  });

}
