class productGUI {
    constructor() {

        $(document).on('click', '.product_button', (e) => {
            let parent = $(e.target).closest('.product');
            let productId = parent.attr('product-id') / 1;
            let product = app.products.find(p => p.artikelid == productId);

            //console.log(product)

            app.cart.addProductToCart(product, 1);
        });

    }
}

