let copyOfProductListing
$(document).ready(function () {
  $("#myInput").on("keyup", function func() {
    if($('.product-listing .product').length === 0){
      // haven't loaded the products yet
      // so try to call me again after a short timeout
      setTimeout(()=>func.apply(this), 200);
      return;
    }
    var value = $(this).val().toLowerCase();
    copyOfProductListing = copyOfProductListing || $('.product-listing').html();
    $('.product-listing').html(copyOfProductListing);
    $("#searchFilterDiv  .product_content").each(function () {
      if ($(this).text().toLowerCase().includes(value)) {
        $(this).closest('.grid-item').show();
      } 
      else {
        $(this).closest('.grid-item').remove();
      }
    });
  });
});


