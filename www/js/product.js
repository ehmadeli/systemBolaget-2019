let assert = require('assert');

class Product {
  constructor(data) {
    Object.assign(this, data);
    this.category = [];
  }
}

if (typeof module === 'object') {
  module.exports = Product;
}