let { $, sleep } = require('./funcs.js');

module.exports = function () {


  this.Given(/^that I am on the page$/, async function () {
    await helpers.loadPage('http://localhost:3306/categories.html');
    await sleep(5000);
  });


  this.Given(/^I searched products and added to the cart$/, async function () {
    let searchBox = await $('#myInput');
 //   let searchButton = await $('.header_search_button');

    await searchBox.sendKeys("Renat");

  //  await searchButton.click();
    let add = await $('.product-listing .product_cart');
    if (add.length > 0)
      add = add[0];

    assert.notEqual(add, 'could not find the add button');
    await add.click();

    await helpers.loadPage('http://localhost:3306/cart.html');
    await sleep(5000);
    
    let firstProduct = await $('.cart_item td:first-child');
    this.addProduct = await firstProduct.getText();
    await sleep(3000);

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

  });



    this.Given(/^I searched for the products and added 3 products into the cart$/, async function () {

      let searchBox = await $('#myInput');
   //   assert.notEqual(searchBox, null, 'could not find the search bar');

      await searchBox.sendKeys('Purcari');
   //   let searchButton = await $('.header_search_button');

     // assert.notEqual(searchButton, null, 'could not find the search button');
     // await searchButton.click();

      let add = await $('.product-listing .product_cart');
      assert.notEqual(add, null, 'could not find the addbutton');

      if (Array.isArray(add) == true) {
        add = add[0];
      }

      await add.click();

      await helpers.loadPage('http://localhost:3306/cart.html');
      await sleep(5000);

      let firstProduct = await $('.cart_item td:first-child');
      this.addedProduct1 = await firstProduct.getText();

      await searchBox.clear();
      await searchBox.sendKeys('Canella');
  //    await searchButton.click();
      add = await $('.product-listing .product_cart');

      assert.notEqual(add, null, 'could not find the add button');
      if (Array.isArray(add) === true) {
        add = add[0];
      }

      await helpers.loadPage('http://localhost:3306/cart.html');
      await sleep(5000);

      await add.click();
      let searchProduct = await $('.cart_item td:first-child');
      this.addedProduct2 = await secondProduct[1].getText();

      await searchBox.clear();
      await searchBox.sendkeys('Svarta Trannan');
  //    await searchButton.click();
      add = await $('.product-listing .product_cart');

      assert.notEqual(add, null, 'could not find the add Button');
      if (Array.isArray(add) === true) {
        add = add[0];
      }

      await helpers.loadPage('http://localhost:3306/cart.html');
      await sleep(5000);

      await add.click();
      let thirdProduct = await $('.cart_item td:first-child');

      this.addedProduct3 = await thirdProduct[1].getText();

    });


    this.When(/^I click on cart\-button$/, async function () {


      let cartButton = await $('.cart');
      assert(cartButton !== null, 'The cart does not Exist');
      if (cartButton) {
        await cartButton.click();
        await sleep(3000);
      }
    });

    this.Then(/^I can see the total price of products in the cart$/,async function () {
      await helpers.loadPage('http://localhost:3306/cart.html');
      await sleep(5000);

      let ProductTotalPrice = await $('.cart_item td:first-child');
      assert((await productTotalPrice[0].getText()).includes
        (this.addedProduct1), 'The cart do not contain 3 products');
      productTotalPrice = await $('.cart_item td:first-child');

      assert((await productTotalPrice[1].getText()).includes(this.addedProduct2), 'The cart do not contain 3 products');
      productTotalPrice = await $('.cart_item td:first-child');
      assert((await productTotalPrice[3].getText()).includes(this.addedProduct3), 'The cart do not contain 3 products');
    });

  }