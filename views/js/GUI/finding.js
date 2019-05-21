$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#searchFilterDiv  .product_content").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    if($('#searchFilterDiv .product_content:visible').length===0){
          $('#searchFilterDiv div.product div.alert div.error').show();
        }else{
          $('#searchFilterDiv div.product div.alert div.error').hide();
        }
  });
});


