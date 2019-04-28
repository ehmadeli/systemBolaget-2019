let Product = require('../www/js/product.js');
let ProductCart = require('../www/js/productcart.js');
let data = require('../www/json/sortiment.json');
//let fs = require('fs');


module.exports = function(){

  let products = [];
  let prodCart = new ProductCart();
  let oldCart = new ProductCart();
  let newCart = new ProductCart();
  
  for(let t of data){
      let tmp = new Product(t);
      tmp.category.push(tmp.varugrupp);
      tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
      products.push(tmp);
  }
  prodCart.addProductToCart(products[0], 1);
    prodCart.addProductToCart(products[1], 2);
    prodCart.addProductToCart(products[5], 6);
    prodCart.addProductToCart(products[10], 3);
  
  this.Given(/^that I already have products in my cart$/, function () {
    assert(prodCart.products.length > 0, 'The product cart does not have products');
  });
    
  this.When(/^I close my browser$/, {timeout: 30000}, function () {  
    oldCart = prodCart;  
    //assert(prodCart.saveProductCart('../systemBolaget-2019/www/json/productcart.json'), "The product cart  is not saved to the file");
     
    oldCart.saveProductCart('../systemBolaget-2019/www/json/productcart.json');
    
  });

  this.When(/^I reopen my browser$/, {timeout: 30000}, function () {
    newCart.readProductCart('../systemBolaget-2019/www/json/productcart.json');
            
    //assert(prodCart.readProductCart('../systemBolaget-2019/www/json/productcart.json'), "The product cart  is not readed from  the file");
    
  });

  this.Then(/^I should get the same shopping cart as previous$/, {timeout: 30000}, function () {  
      
    //  let str = JSON.stringify(oldCart, null, 4)
    //  console.log(str);
    //  console.log("***");
    //  let str1 = JSON.stringify(newCart, null, 4)
    //   console.log(str1);

      assert(JSON.stringify(oldCart) === JSON.stringify(newCart), "The product carts  is not the same");
});


this.When(/^I refresh my browser$/, function () {
    
  });

  this.Then(/^I should get the same shopping cart as previous one$/, function () {
       
  });

}
