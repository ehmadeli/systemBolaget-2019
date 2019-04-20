let assert = require('assert');
let fs = require('fs');
let Product = require('../product.js');
let ProductCart = require('../productcart.js');
let data = require('../../json/sortiment.json');
//let Systembolaget = require('./bolaget.js');

module.exports = class ProductCartTest {

testProducCartParameters(){
    let products = [];
    let prodCart = new ProductCart();
    let validQuantity = 1;

    for(let t of data){
        let tmp = new Product(t);
        tmp.category.push(tmp.varugrupp);
        tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
        products.push(tmp);
    }
    
    //Test Only
    //console.log(products[0]);

    assert.throws(
        function() { prodCart.addProductToCart(undefined, validQuantity); },
        "A product cart without product was created"
    );
  
    assert.throws(
        function() { prodCart.addProductToCart(products[0], '1'); },
        "The products quantity  is not a number'"
    );
    assert.throws(
        function() { prodCart.addProductToCart(products[0], 'abs'); },
        "The products quantity  is not a number'"
    );
     
    
    /*assert.throws(
        function() { prodCart.addProductToCart(products[0], -1); },
          "The products quantity  is less then 1"
      );

     assert.throws(
         function() { prodCart.addProductToCart(products[0], 0); },
         "The products quantity  is less then 1"
     );*/
    
    // prodCart.addProductToCart(products[0], validQuantity);
    // console.log('*** ' + prodCart.products[0]);

    assert.doesNotThrow(
        function() { prodCart.addProductToCart(products[0], validQuantity); },
        "The products quantity  is less then 1"
    );
    assert(
        prodCart.quantity[0] === 1,
        "A prodCart was created with one quantity of the product but now has a diff. quantity"
    );

    assert(
        prodCart.products[0] === 'Renat',
        "A prodCart was created with the name of the product but now has a diff. name"
    );

    assert(
        prodCart.price[0] === 204,
        "A prodCart was created with the price  of the product but now has a diff. price"
    );
 
    //Save ProductCart to file
    assert.doesNotThrow(
         function() { prodCart.saveProductCart(); },
         "The products quantity  is less then 1"
     );
    

  }
  


}