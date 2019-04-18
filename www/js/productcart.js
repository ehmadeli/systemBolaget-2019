let assert = require('assert');

module.exports = class ProductCart {
 
    constructor(){
      this.products = [];
      this.quantity = [];
    }
   

addProductToCart(product, quantity = 1){
    this.products.push(product);
    this.quantity.push(quantity);
}

deleteProductFromCart(product){
    this.products.splice(this.products.indexOf(product),1);
    this.quantity.splice(this.products.indexOf(product),1);
}

changeQuantityOfProduct(product, newQuantity){
    let index = this.products.indexOf(product);
    this.quantity[index] = newQuantity;
    if(newQuantity == 0){
        deleteProductFromCart(product);
    }
}

}
   
  