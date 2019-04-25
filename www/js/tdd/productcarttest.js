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
    prodCart.addProductToCart(products[1], validQuantity);
    prodCart.addProductToCart(products[5], validQuantity + 3);
    assert.doesNotThrow(
         function() { prodCart.saveProductCart(); },
         "The  products cart  is not save"
     );
    

    //Read ProductCart to object
    assert.doesNotThrow(
        function() { prodCart.readProductCart(); },
        "The products cart  is not read"
    );
    assert(prodCart.products[0] == 'Renat', "The first product in productCart is not the same");
    assert(prodCart.quantity[2] == 4, "The 3td product quantity in productCart is not the same");
    assert(prodCart.price[1] == 139, "The second product price in productCart is not the same");


  }
  
  testProductCartNames(){
    let products = [];
    let prodCart = new ProductCart();
    let validQuantity = 3;

    for(let t of data){
        let tmp = new Product(t);
        tmp.category.push(tmp.varugrupp);
        tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
        products.push(tmp);
    }

    assert.throws(
        function() { prodCart.addProductToCart(undefined, validQuantity); },
        "A product cart without product was created"
    );

    assert.throws(
        function() { prodCart.addProductToCart('', validQuantity); },
        "A product cart with empty name was created"
    );

    assert.throws(
        function() { prodCart.addProductToCart(1234, validQuantity); },
        "A product cart with number-name was created"
    );

  }


  testProductQuantity(){
    let products = [];
    let prodCart = new ProductCart();
    let validQuantity = 1;

    for(let t of data){
        let tmp = new Product(t);
        tmp.category.push(tmp.varugrupp);
        tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
        products.push(tmp);
    }


    let validproductName = 'Mouse';
    assert.throws(
      function() { prodCart.addProductToCart(validproductName, undefined); },
      "A product with no productquentity was created"
    );
  assert.throws(
    function() { prodCart.addProductToCart(validproductName, ' '); },
    "A product with an empty string productquantity was created"
  );
  assert.throws(
    function() { prodCart.addProductToCart(validproductName, '123456'); },
    "A person with the productquantity-string '123456' was created"
  );
  assert.throws(
    function() { prodCart.addProductToCart(validproductName, { quantity: 30 }); },
    "A product with an productquantity - object was created"
  );

  // Try creating a product and then
  // Check if the quentity of the product actually matches the value
  // we used when creating it
//   let p = product(validproductName, 0);
//   assert(
//     p.validproductquantity = 0,
//     "A product was created with the productquantity 0 but now has a diff. quantity"
//   );
//   let p = product(validproductName, -1);
//   assert(
//     p.validproductquantity =-1,
//     "A product was created with the productquantity -1 but now has a diff. quantity"
//   );
}

testRemoveProductFromCartNames(){
    let products = [];
    let prodCart = new ProductCart();
    let validQuantity = 3;

    for(let t of data){
        let tmp = new Product(t);
        tmp.category.push(tmp.varugrupp);
        tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
        products.push(tmp);
    }
    prodCart.addProductToCart(products[0], 1);
    prodCart.addProductToCart(products[1],  3);
    prodCart.addProductToCart(products[2],  2);
    prodCart.addProductToCart(products[3],  3);
    prodCart.addProductToCart(products[4],  1);
    
    assert.throws(
        function() { prodCart.deleteProductFromCart(undefined)},
        "A product with an undefined  was removed"
      );

      assert.throws(
        function() { prodCart.deleteProductFromCart('Martini')},
        "A product with an string  was removed"
      );

      assert.throws(
        function() { prodCart.deleteProductFromCart('')},
        "A product with an string  was removed"
      );

      assert.throws(
        function() { prodCart.deleteProductFromCart(12345)},
        "A product with an numbers  was removed"
      );

      //Testa remove the product
      assert.doesNotThrow(
        function() { prodCart.deleteProductFromCart(products[4]); },
        "The products cart  is not removed"
    );
   assert.notEqual(prodCart.products[prodCart.products.length -1], 'Viña Soledad', "The last product  in productCart is not removed");
   //assert.equal(prodCart.products[2], 'Viña Soledad', "The last product  in productCart is not removed");

    assert(prodCart.products.length == 4, 'Products array has the same size after elements removing');
    assert.notEqual(prodCart.products[prodCart.products.length -1], 'Viña Soledad', "The last product  in productCart is not removed");

  //Testa remove the product with zero quantity
  assert.throws(
    function() {prodCart.addProductToCart(products[3],  0); },
     "The product with zero quantity is added"
    );

}

}

