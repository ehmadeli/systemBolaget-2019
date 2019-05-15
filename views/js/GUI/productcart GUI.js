class GUIproductCart {
    constructor() {
        this.cart = new ProductCart();
        this.updateListOfProducts();
        $('.emptyCart').click((e) => {
            this.cart.empty();
        });
        $('.add').click((e) => {
            this.cart.add();
            this.updateListOfProducts();
        });
    }

    updateListOfProducts() {
        let rows = this.cart.overviewOfCart();
        let html = <table class="cart-items table">
            <thead>
                <tr>
                    <th scope='col'>Produckt</th>
                    <th scope='col'>Antal</th>
                    <th scope='col'>Summa</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                for(let row of rows){
                    html += <tr>
                        <td>${rows.product.namn}</td>
                        <td><input type='number' value='${row.quantity}'></input></td>
                        <td>${row.rowSum}</td>
                        <td><button class=' btn btn-primary'></button>Ta bort</td>
                    </tr>
                };
                    }
                    html+=
       </tbody>
        </table>
            ;
        $('.cart-items').html(html);
    }

}

