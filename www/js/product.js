let assert = require('assert');

class Product {
  constructor(data) {
    Object.assign(this, data);
    this.priceInCart = 0;
    this.quantityInCart = 0;
  }
}

if (typeof module === 'object') {
  module.exports = Product;
}