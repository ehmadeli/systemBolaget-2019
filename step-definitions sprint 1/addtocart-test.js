const App = require('../www/js/app.js');

module.exports = function () {

    let app;
    let product;

    this.Given(/^that a product is available in the shop$/, function(){
        app = new App();
        // if I don't mind that a product might be out of stock
        // the maybe just choose a random product
        let randomIndex = Math.floor(app.products.length * Math.random());
        product = app.products[randomIndex];
    });

    this.When(/^I add the product to cart$/, function () {
        // should we randmoize and test that correct quantity
        // is stored as well - for now I just go with 3 - the same quantity each time
        app.cart.addProductToCart(product, 3);
    });

    this.Then(/^it should be added to the cart$/, function(){
        // the cart has no method you can call to get what is in it???
        // how could i test this then?
        // should I look directly at the three(!) different arrays
        // the separately holds the product, the quantity of a product and price per row?
        // (a rather shaky solution)
        // or should there be a method like "overview" or "getContent"
        // and should we first change to using one array with small objects
        // with three properties {product: ProductInstance, quantity: Number, price: Number}
        // before we write such a method because then that method
        // could basically just return the single array...
        assert(app.cart.products.includes(product), 'Not the same name of the product in the cart as the product we added.');
    });

    // Should there be an "And in the right quantity" in the scenario after Then it sould be added to the cart
    // that would result in another this.Then step where could check that the cart
    // stores the correct quantity that you added too...


    this.Then(/^the two different products should be added to the cart$/, function () {

       app.cart.addProductToCart(app.products[0], 3);
       
       app.cart.addProductToCart(app.products[1], 1);
    });
        
      

      this.Given(/^that there is a product that is out of stock$/, function () {
          let oldProduct = app.products[30];
          app.products.splice(app.products.indexOf(oldProduct), 1);
        assert(!app.cart.products.includes(oldProduct), 'The same name of the product in the cart as the product we added.');

      });
     
      this.When(/^I try to add that product$/, function () {
        app.cart.products.includes(product)
        let randomIndex = Math.floor(app.products.length * Math.random());
        product = app.products[randomIndex];
        app.cart.addProductToCart(product, 3);    
        
      });

      this.Then(/^that a products are available in the shop$/, function() {
        app = new App();
        // if I don't mind that a product might be out of stock
        // the maybe just choose a random product
        let randomIndex = Math.floor(app.products.length * Math.random());
        product = app.products[randomIndex];
        
      });

      this.Then(/^page should say 'Out of stock'$/, function () {
        
        // web page we test in next sprint.
      });

      this.When(/^I add one product into the cart$/, function () {
        app.cart.addProductToCart(app.products[2], 1);
        
      });

      this.When(/^i add one other product to the cart$/, function () {
        app.cart.addProductToCart(app.products[3], 1);
      });


}
