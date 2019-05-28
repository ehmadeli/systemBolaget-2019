$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#searchFilterDiv  .product_content").each(function() {
        if ($(this).text().toLowerCase().includes(value)) {
          $(this).closest('.grid-item').show();
        } else {
          $(this).closest('.grid-item').hide();
          }
        });
        });
  });
  
  
  