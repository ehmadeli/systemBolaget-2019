
let Product = require('../www/js/product.js');
let ProductCart = require('../www/js/productcart.js');
let data = require('../www/json/sortiment.json');
var Fuse = require('fuse.js');
const App = require('../www/js/app.js');


module.exports = function(){

  let products = [];
  let app = new App();
  let prodCart = new ProductCart();
  let searchName1;
  let searchName2;
  let searchProductNumber;
  let searchResult= [];

/*  for(let t of data){
      let tmp = new Product(t);
      tmp.category.push(tmp.varugrupp);
      tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
      products.push(tmp);
  }
  */
  this.Given(/^that i am searching by a partial or full namn\.$/, function () {
    //searchName1 = 'Renato Corino'; 
   

    // using fuse.js method for partial name and full name matching 
    let options = {
      keys: ['namn','namn2','ursprunglandnamn','varnummer'],
      threshold: 0.0,
      caseSensitive:true
    };
    var fuse = new Fuse(app.products, options)
    
    let results = fuse.search('Nepal');

    if ( results == true){
    console.log(results); 
    } 
    else if(results == false){

      console.log("Product not found");
    }
    
     console.log(results);  
      console.log("---->> " + results.length);
     /* //The first variant
   searchResult = findObjectByKey(products, 'namn2', res)
    console.log(searchResult);
    console.log(">>== " + searchResult.length);*/
    //The second variant
   /* let  result2 =  products.filter(function(prod)
         {
       return prod.namn2 == searchName1;
      });*/

   
  });


}






/*


function findObjectByKey(array, key, value) {
    let tmpArray=[];
    for (var i = 0; i < array.length; i++) {
       if (array[i][key] === value) {
           tmpArray.push(array[i]);
       }
    }
    return tmpArray;
}*/