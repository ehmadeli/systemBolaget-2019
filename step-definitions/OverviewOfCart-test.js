let { $, sleep } = require('./funcs.js');

module.exports = function () {

  //Scanario 1

  this.Given(/^that I am on the page$/, async function () {
    await helpers.loadPage('http://localhost:3306/categories.html');

  });


  this.Given(/^I searched products and added to the cart$/, async function () {
    let searchBox = await $('#myInput');
    //   let searchButton = await $('.header_search_button');

    await searchBox.sendKeys("Renat");

    await sleep(3000);
    //  await searchButton.click();
    let add = await $('.product-listing .product_cart');
    if (add.length > 0)
      add = add[0];

    assert.notEqual(add, null, 'could not find the add button');
    await add.click();

  });



  this.When(/^I click on cart\-button to overview it$/, async function () {

    let cartButton = await $('.cart');
    assert(cartButton !== null, 'The cart does not Exist');
    if (cartButton) {
      await cartButton.click();
      await sleep(3000);
    }
  });

  this.Then(/^I can see all the products in the cart and their details$/, async function () {
    await helpers.loadPage('http://localhost:3306/cart.html');
    await sleep(5000);


  });

  //Scanario 2


  this.Given(/^I searched for the products and added products into the cart$/, async function () {

    let searchBox = await $('#myInput');
    //   assert.notEqual(searchBox, null, 'could not find the search bar');

    await searchBox.sendKeys('Excelso');
    await sleep(5000);

    let addButton = await $('.product-listing .product_cart');
    assert.notEqual(addButton, null, 'could not find the addbutton');

    if (Array.isArray(addButton) == true) {
      addButton = addButton[0];
    }

    await addButton.click();
    await helpers.loadPage('http://localhost:3306/cart.html');
    await sleep(5000);


    let firstProduct = await $('.cart_items li:first-child');
    this.addedProduct1 = await firstProduct.getText();

    await helpers.loadPage('http://localhost:3306/categories.html');
    await sleep(3000);
    
    searchBox = await $('#myInput');
    //await searchBox.clear();
    await searchBox.sendKeys('Canella');
  

    addButton = await $('.product-listing .product_cart');


    assert.notEqual(addButton, null, 'could not find the add button');
    if (Array.isArray(addButton) === true) {
      addButton = addButton[0];
    }

    await addButton.click();

    await helpers.loadPage('http://localhost:3306/cart.html');
    await sleep(5000);

    let secondProduct= await $('.cart_items li:nth-child(2)');
    this.addedProduct2 = await secondProduct.getText();
    
    await helpers.loadPage('http://localhost:3306/categories.html');
    await sleep(3000);
    
    searchBox = await $('#myInput');
    await searchBox.clear();
    await searchBox.sendKeys('Penny Blue');

    addButton = await $('.product-listing .product_cart');

    assert.notEqual(addButton, null, 'could not find the add Button');
    if (Array.isArray(addButton)) {
      addButton = addButton[0];
    }


    await addButton.click();
    await helpers.loadPage('http://localhost:3306/cart.html');
    await sleep(5000);


    let thirdProduct = await $('.cart_items li:nth-child(3)');
    this.addedProduct3 = await thirdProduct.getText();

    await helpers.loadPage('http://localhost:3306/cart.html');
    await sleep(5000);


  });


  this.When(/^I click on cart\-button$/, async function () {


    let cartButton = await $('.cart');
    assert(cartButton !== null, 'The cart does not Exist');
    if (cartButton) {
      await cartButton.click();
      await sleep(3000);
    }
  });

  this.Then(/^I can see the total price of products in the cart$/, async function () {
    await helpers.loadPage('http://localhost:3306/cart.html');
    await sleep(5000);

    let productTotPrice = await $('.cart_items li .product_total');
    let totPrice = await $('.total tbody');

    totPrice = (await totPrice.getText()).split(':').pop()/1;
    let calculatedSum = 0;

    for (let i = 0; i < productTotPrice.length; i++) {
      productTotPrice[i] = (await productTotPrice[i].getText()).replace(/Total:/g,'')/1;
      calculatedSum += productTotPrice[i];
    }

    assert(calculatedSum == totPrice, "fel totalsumma i varuvargnen" + calculatedSum + ". " + totPrice)

  });

}
