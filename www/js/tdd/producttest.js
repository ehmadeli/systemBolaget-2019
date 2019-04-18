let assert = require('assert');
let Product = require('../product.js');
let data = require('../../json/sortiment.json');
//let Systembolaget = require('./bolaget.js');

module.exports = class ProductTest {

testProductNames(){
  let products = [];
  for(let t of data){
    let tmp = new Product(t);
    tmp.category.push(tmp.varugrupp);
    tmp.category.push(tmp.varugrupp + ' från ' + tmp.ursprunglandnamn);
    products.push(tmp);

    assert (typeof tmp.nr == 'number', 'The products NR ' + tmp.nr + ' is not a number');
    assert (typeof tmp.varnummer == 'number', 'The products varnummer ' + tmp.varnummer + ' is not a number');
    assert (typeof tmp.artikelid == 'number', 'The products artikelid ' + tmp.artikelid + ' is not a number');
    
    assert.notEqual(tmp.namn, undefined, "The product with no name exist");
    assert.notEqual(tmp.namn, '', "The product with empty name exist");

    assert (typeof tmp.prisinklmoms == 'number', 'The products price ' + tmp.prisinklmoms + ' is not a number');
    assert (typeof tmp.prisPerLiter == 'number', 'The products price ' + tmp.prisPerLiter + ' is not a number');

    assert.notEqual(tmp.category, undefined, "The products category with no name exist");
    assert.notEqual(tmp.category, '', "The products category with empty name exist");

  }
  //console.log(products[1]);
  
  


  }
  


}