
let Product = require('../www/js/product.js');
let ProductCart = require('../www/js/productcart.js');
let data = require('../www/json/sortiment.json');


module.exports = function(){

  let products = [];
  let prodCart = new ProductCart();
  let searchName1;
  let searchName2;
  let searchProductNumber;
  let searchResult= [];

  for(let t of data){
      let tmp = new Product(t);
      tmp.category.push(tmp.varugrupp);
      tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
      products.push(tmp);
  }
  
  this.Given(/^that i am searching by a partial name$/, function () {
    searchName1 = 'Renato Corino'; 
    
    //The first variant
    searchResult = findObjectByKey(products, 'producent', searchName1);
    console.log(searchResult);
    console.log(">>== " + searchResult.length);

    //The second variant
    let  result2 =  products.filter(function(prod) {
      return prod.producent == searchName1;});
    console.log(result2);  
    console.log(">>*** " + result2.length);
    
  });

      
  this.When(/^I search the product $/, function () {        
      
  });

  this.Then(/^i should get a list of products with names that matches the name$/, function () {
   
  });

this.Then(/^i should get a list of products with names that matches the name2$/, function () {
 
});

this.Given(/^that i am searching by a product number.$/, function () {
    searchProductNumber = 23456;
    
  });

this.Then(/^i should get a list of products with names that matches with product number$/, function () {
 
});



////
this.Given(/^that there is no product left in the shop.$/, function () {
    
    
});

this.When(/^I search the product with the product number$/, function () {        
      
});

this.Then(/^it displayed the message 'Product not found'$/, function () {
 
});




}









function findObjectByKey(array, key, value) {
    let tmpArray=[];
    for (var i = 0; i < array.length; i++) {
       if (array[i][key] === value) {
           tmpArray.push(array[i]);
       }
    }
    return tmpArray;
}