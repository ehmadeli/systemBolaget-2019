
//let Product = require('../www/js/product.js');
//let ProductCart = require('../www/js/productcart.js');
//let data = require('../www/json/sortiment.json');
var Fuse = require('fuse.js');
const App = require('../www/js/app.js');


module.exports = function(){

 // let products = [];
  let app = new App();
 // let prodCart = new ProductCart();
  this.Given(/^that i am searching by a partial or full namn\.$/, function () {
    //searchName1 = 'Renato Corino'; 
   // using fuse.js method for partial name and full name matching 
    let options = {
      keys: ['namn','namn2','ursprunglandnamn','varnummer'],
      threshold: 0.0,
      caseSensitive:true
    };
    var fuse = new Fuse(app.products, options)
    let results = fuse.search('India');
   
    if ( results == true){
    console.log(results); 
    } 
    else if(results == false){

      console.log("Product not found");
    }
    
     console.log(results);  
      console.log("---->> " + results.length);
    });

  }

   