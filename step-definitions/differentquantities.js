let Product = require('../www/js/product.js');
let ProductCart = require('../www/js/productcart.js');
let data = require('../www/json/sortiment.json');

module.exports = function(){

  let products = [];
  let prodCart = new ProductCart();
  let prodQuantity;
  let newProdQuantity;
  
this.Given(/^the product is available in the shop$/, function () {
    for(let t of data){
        let tmp = new Product(t);
        tmp.category.push(tmp.varugrupp);
        tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
        products.push(tmp);
    }
});

this.When(/^I add (\d+) unit of the product to the cart$/, function (number) {
    prodQuantity = number / 1;
    prodCart.addProductToCart(products[0], prodQuantity);
    assert(prodCart.products.length == prodQuantity, 'The product is not added to the cart');
});

this.When(/^I add (\d+) units of the product to the cart$/, function (number) {
    if(number / 1 != 0){
        newProdQuantity = prodQuantity + number / 1;
        prodCart.changeQuantityOfProduct(products[0], newProdQuantity );
        //console.log(">>=When1: " + number + " --- " + prodCart.quantity[0] + " -- " + prodQuantity  + " -- " + newProdQuantity );
    } else {
        newProdQuantity = number / 1;
        prodCart.changeQuantityOfProduct(products[0], newProdQuantity );
        //console.log(">>=When2:  " + number + " --- " + prodCart.quantity[0] + " -- " + newProdQuantity );
    }
});

this.Then(/^it should be added 1 unit to the cart$/, function () {
    assert(prodCart.products.length == prodQuantity, 'The product is not added to the cart');
});

this.Then(/^it should be added (\d+) units to the cart$/, function (number) {
    //console.log(">>== " + number + " --- " + prodCart.quantity[0] + " -- " + newProdQuantity );
    assert(prodCart.quantity[0] == newProdQuantity, 'The product quantity is not added to the cart');
});

this.Then(/^it should not be added to the cart$/, function () {
    assert(!prodCart.products.includes(products[0].namn), "The product with zero quanyity  is added to  the cart");
});

}