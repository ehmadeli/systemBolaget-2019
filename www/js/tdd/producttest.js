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
    assert.notEqual(tmp.prisinklmoms, 0,  "The products price  equals Zero");
    assert (typeof tmp.prisPerLiter == 'number', 'The products price ' + tmp.prisPerLiter + ' is not a number');

    assert.notEqual(tmp.category, undefined, "The products category with no name exist");
    assert.notEqual(tmp.category, '', "The products category with empty name exist");
////
// let validquantity = 1;
// assert.throws(
//   function() { product(undefined, validquantity); },
//   "A product with no productname was created"

//   );
//   assert.throws(
//     function() { product(' ', validquantity); },
//     "A product with an empty productname was created"
//   );

//   assert.throws(
//     function() { product('123456', validquantity); },
//     "A product with the  '123456' productname was created"
//   );

//   assert.throws(
//     function() { product('##¤%&', validquantity); },
//     "A product with the  special character with product name was created"
//   );
//   assert.throws(
//     function() { new product(123456, validquantity); },
//     "A product with a numeral product was created"
//   );

//   let p;
// assert.doesNotThrow(
// function() { p = new product("computer", validquantity); },
// "A product with correct name and age, should NOT throw an error"
// );
// assert(
// p.validproductname === 'computer',
// "A product was created with the productname computer but now has a diff. name"
// );



/////




  }
  //console.log(products[1]);
  
  


  }
  


}