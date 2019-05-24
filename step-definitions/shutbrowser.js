let {$, sleep} = require('./funcs');

module.exports = function(){

  let num;

  this.Given(/^that I already have (\d+) products in my cart$/, async function (n) {
    await helpers.loadPage('http://localhost:3306/categories.html');
    // await helpers.loadPage('http://localhost:' + portnumber + '/categories.html')
     await sleep(3000);
     let p1;
     num = n / 1;
     for(let i=0; i < num; i++){
      p1 = (await $('.product_cart'))[i];
      await p1.click();
     };
    
  });
    
  this.When(/^I click the refresh-button in my browser$/, async function () {  
    
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
      
    assert(p / 1 == num, "The products quantity  is not the same");
});

}
