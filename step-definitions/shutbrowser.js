let {$, sleep} = require('./funcs');

module.exports = function(){

   
  this.Given(/^that I already have products in my cart$/, async function () {
    await helpers.loadPage('http://localhost:3306/categories.html');
    // await helpers.loadPage('http://localhost:' + portnumber + '/categories.html')
     await sleep(3000);
     let p1 = (await $('.product_cart'))[2];
     await p1.click();
     p1 = (await $('.product_cart'))[4];
     await p1.click();
     p1 = (await $('.product_cart'))[6];
     await p1.click();
     await sleep(3000);
     
    //  let cart = await driver.findElement(by.css('.cart'));
    //  await cart.click();
    //  await sleep(3000);
  });
    
  this.When(/^I click the refresh-button in my browser$/, async function () {  
    
    await driver.navigate().refresh();
  });

  this.When(/^I refresh my browser$/, async function () {  
    
    await driver.navigate().refresh();
  });

  this.When(/^I reopen my browser$/, async function () {
    
    await helpers.loadPage('http://localhost:3306/cart.html');
   });

  this.Then(/^I should get the same shopping cart as previous$/, async function () {  
    
      let cart = await driver.findElement(by.css('.cart'));
      await cart.click();

      await sleep(3000);
      let p = (await $('.product_name_container')).length;
      
    assert(p / 1 == 3, "The products quantity  is not the same");
});



}
