;class Product {
  constructor(data) {
    Object.assign(this, data);
  }
}

if (typeof module === 'object') {
  module.exports = Product;
}