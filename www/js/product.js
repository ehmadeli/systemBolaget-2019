let assert = require('assert');

class Product {
 
    constructor(data){
      // just transfer all properties 
      // from data to "this" 
      Object.assign(this, data);
      this.category = [];
    }
   
  }
   
  // classify
  let temp = require('..json/sortiment.json');
  let products = [];
  for(let t of temp){
      let tmp = new Product(t);
      tmp.category.push(tmp.varugrupp);
      tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
    products.push(tmp);
  }
   
  // Nu är products en array med 18 695 instanser av Product
  // Export the class as a module if on backend

if(typeof module === 'object'){
    module.exports = Product;
  }