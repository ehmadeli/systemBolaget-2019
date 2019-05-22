class productCartGUI {
    constructor() {

        console.log('aaa');
        this.updateListOfProducts();

        $('.button_clear').click((e) => {
            app.cart.emptyProductCart();
        });

        $(document).on('click', '.remove_item', (e) => {

            let parent = $(e.target).closest('.product');
            // let productId = parent.attr('product-ad') / 1;
            let productId = $(e.target).find('input').attr('idart') / 1;
            let product = app.products.find(p => p.artikelid == productId);

            console.log(product)

            app.cart.deleteProductFromCart(product);
            this.updateListOfProducts();
        });

        $(document).on('click', '.qty_add', (e) => {

            let parent = $(e.target).closest('.cart_item');
            // let productId = parent.attr('product-ad') / 1;
            let productId = parent.find('[idart]').attr('idart');
            let product = app.products.find(p => p.artikelid == productId);

            //let newuantity = (app.cart.products.quantityInCart) +1;
            let oldQ = parent.find('.product_text.product_num').text() / 1;

            app.cart.changeQuantityOfProduct(product, oldQ + 1);
            this.updateListOfProducts();


        });

        $(document).on('click', '.qty_sub', (e) => {

            let parent = $(e.target).closest('.cart_item');
            // let productId = parent.attr('product-ad') / 1;
            let productId = parent.find('[idart]').attr('idart');
            let product = app.products.find(p => p.artikelid == productId);

            //let newuantity = (app.cart.products.quantityInCart) +1;
            let oldQ = parent.find('.product_text.product_num').text() / 1;

            app.cart.changeQuantityOfProduct(product, oldQ - 1);
            this.updateListOfProducts();

        });


    }

    updateListOfProducts() {

        let html = ` `;



        for (let x of app.cart.products) {

            html += `
            <div class="cart_items">
            <ul class="cart_items_list">

        
                <!-- Cart Item -->
                <li class="cart_item item_list d-flex flex-lg-row  flex-column align-items-lg-center align-items-start justify-content-lg-end justify-content-start">
               
                <div class="product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start mr-auto">
                        <div><div class="product_image ml-5"><img src="images/heine.png" alt=""></div></div>
                        <div class="product_name_container">
                            <div class="product_name ml-5"><a href="#">${x.productInCart.namn}</a></div>
                            <div class="product_text"></div>
                        </div>
                    </div>
                    
                    <div class="product_price product_text ml-5"><span>Price: </span>${x.productInCart.prisinklmoms}</div>
                    <div class="product_quantity_container">
                        <div class="product_quantity ml-lg-auto mr-lg-auto text-center">
                            <span class="product_text product_num "><input type="hidden" idart=${x.productInCart.artikelid}>${x.quantityInCart}</span>
                            <div class="qty_sub qty_button trans_200 text-center "><input type="hidden" idart=${x.productInCart.artikelid}><span>-</span></div>
                            <div class="qty_add qty_button trans_200 text-center"><input type="hidden" idart=${x.productInCart.artikelid}><span>+</span></div>
                        </div>
                    </div>
                    <div class="product_total product_text ml-5"><span>Total: </span>${x.priceInCart}</div>

                    <button type="button" class="remove_item btn btn-secondary ml-5"><input type="hidden" idart=${x.productInCart.artikelid}>Remove Item</button>
                </li>
            </ul>
        </div> `;

        }
        $('.cart_items tbody').html(html);
    }

}

