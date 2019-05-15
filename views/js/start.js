// Make assert (from the chai library) global
window.assert = chai.assert; 

// Start the app
let app = new App();


// This code should only run on the categories.html page and we might want to choose which and how many products
// all 18000 of them is a little to much
function showProducts(){
   // let products be just the first 25 products
   let products = app.products.slice(0,25);
   let html = '';
   for(let product of products){
     html += `
        <div class="col-xl-4 col-md-6 grid-item new">
        <div class="product">
            <div class="product_image"><img src="images/product_1.jpg" alt=""></div>
            <div class="product_content">
                <div class="product_info d-flex flex-row align-items-start justify-content-start">
                    <div>
                        <div>
                            <div class="product_name"><a href="product.html">${product.namn}</a></div>
                            <div class="product_category">In <a href="category.html">Category</a></div>
                        </div>
                    </div>
                    <div class="ml-auto text-right">
                        <div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                        <div class="product_price text-right">${product.prisinklmoms} Sek</div>
                    </div>
                </div>
                <div class="product_buttons">
                    <div class="text-right d-flex flex-row align-items-start justify-content-start">
                        <div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                            <div><div><img src="images/heart_2.svg" class="svg" alt=""><div>+</div></div></div>
                        </div>
                        <div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                            <div><div><img src="images/cart.svg" class="svg" alt=""><div>+</div></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    ` ;
   }
   $('.product-listing').html(html);
}


			