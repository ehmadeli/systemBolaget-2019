class productCartGUI {
    constructor() {

        console.log('aaa');
        this.updateListOfProducts();

        $('.button_clear').click((e) => {
            app.cart.emptyProductCart();
        });
    }

    updateListOfProducts() {

        let html = ` `;



        for (let x of app.cart.products) {


            html += `
            <div class="cart_items">
            <ul class="cart_items_list">

                <!-- Cart Item -->
                <li class="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-end justify-content-start">
                    <div class="product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start mr-auto">
                        <div><div class="product_number">1</div></div>
                        <div><div class="product_image"><img src="images/heine.png" alt=""></div></div>
                        <div class="product_name_container">
                            <div class="product_name"><a href="#">${x.productInCart.namn}</a></div>
                            <div class="product_text"></div>
                        </div>
                    </div>
                    
                    <div class="product_price product_text"><span>Price: </span>${x.productInCart.prisinklmoms}</div>
                    <div class="product_quantity_container">
                        <div class="product_quantity ml-lg-auto mr-lg-auto text-center">
                            <span class="product_text product_num">${x.quantityInCart}</span>
                            <div class="qty_sub qty_button trans_200 text-center"><span>-</span></div>
                            <div class="qty_add qty_button trans_200 text-center"><span>+</span></div>
                        </div>
                    </div>
                    <div class="product_total product_text"><span>Total: </span>${x.priceInCart}</div>
                </li>
            </ul>
        </div> `;
        }

        $('.cart_items tbody').html(html);
    }

}

