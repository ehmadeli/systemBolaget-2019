let {$, sleep} = require('./funcs');


module.exports = function(){

  this.BeforeScenario(async function()  {
    await helpers.loadPage('http://localhost:3306/categories.html'); 
    await sleep(3000);
});


this.Given(/^that there is (\d+) products in the cart$/, async function (numberOfProductsInCart) {
  
  // never forget to convert string to number
  numberOfProductsInCart = numberOfProductsInCart / 1;

  /*let searchBar = await $('#myInput');
  await searchBar.sendKeys("Renat");
  await sleep(3000);*/
  

  let add;
  // continue to try to get the add buttons as long as we fail
  // (dangerous could continue forever if they never show in the browser)
  while(!add){
    add = await $('.product-listing .product_cart');
    await sleep(100);
  }

  //console.log("==> " + add.length);
  for (let i = 0; i < numberOfProductsInCart; i++) {
    console.log("==>> " + add[i]);
    //await sleep(3000);
    await add[i].click();
  }
  
});



  
this.When(/^i click on the empty\-cart button$/, async function () {
  await helpers.loadPage('http://localhost:3306/cart.html');
  await sleep(2000);
  let emptyCartButton = await $('.button_clear');
  assert.notEqual(emptyCartButton, null, 'could not find the emptycart button');
  await emptyCartButton.click();
});


this.Then(/^It should empty the cart$/, async function () {
  let cartItems = await $('.button_clear');
  assert(cartItems === null, "cart is not empty");
});

}



