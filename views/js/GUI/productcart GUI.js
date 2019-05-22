class productCartGUI {
    constructor() {

        console.log('aaa');
        this.updateListOfProducts();
        $('.emptyCart').click((e) => {
            this.cart.emptyProductCart();
        });
    }

    updateListOfProducts() {

        let html = `

            
                <ul class="cart_bar_list item_list d-flex flex-row align-items-center justify-content-end">
                    <li class="mr-auto">Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Total</li>
                </ul>


    `;


        for (let x of app.cart.products) {


            html += `<tr>
                <td scope="row">${x.productInCart.namn}</th>

                <td >${x.productInCart.prisinklmoms}</td>

                <td >${x.quantityInCart}</td>

                <td >${x.priceInCart}</td>
                
            </tr>`;
        }

        $('.cart_items tbody').html(html);
    }

}

