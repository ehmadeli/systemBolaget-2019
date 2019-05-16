class productCartGUI {
    constructor() {
        
        console.log('aaa');
 //       this.cart = new ProductCart();
        this.updateListOfProducts();
        $('.emptyCart').click((e) => {
            this.cart.emptyProductCart();
        });
        $('.add').click((e) => {
            this.cart.addProductToCart();
            this.updateListOfProducts();
        });
    }

    updateListOfProducts() {
let html='';
console.log("fytfgd");
        for(let x of app.cart.products){

            
            html += `<tr>
                   <th scope="row">${x.productInCart.namn}</th>
                   <td >${x.productInCart.prisinklmoms}</td>
                   minus button
                   <td >${x.quantityInCart}</td>
                   plus-button
                   <td >${x.priceInCart}</td>
                   
                 </tr>`;
            
            }
            $('.cart-items').html(html);

            window.localStorage.setItem('productcart', JSON.stringify(productGUI));


        // let rows = this.cart.overviewOfCart();
        // let html = `<table class="cart-items table">
        //     <thead>
        //         <tr>
        //             <th scope='col'>Produckt</th>
        //             <th scope='col'>Antal</th>
        //             <th scope='col'>Summa</th>
        //             <th scope='col'></th>
        //         </tr>
        //     </thead>
        //     <tbody>`
        //         for(let row of rows){
        //             html += `<tr>
        //                 <td>${rows.product.namn}</td>
        //                 <td><input type='number' value='${row.quantity}'></input></td>
        //                 <td>${row.rowSum}</td>
        //                 <td><button class=' btn btn-primary'></button>Ta bort</td>
        //             </tr>`
        //         };
                    
        //             html +=`</tbody></table>`;
        // $('.cart-items').html(html);
    }

}

