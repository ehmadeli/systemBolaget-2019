$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#findProducts * ").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

	let options = {
      keys: ['namn','namn2','ursprunglandnamn','varnummer'],
      threshold: 0.0,
      caseSensitive:true
    };
    var fuse = new Fuse(app.products, options)
    let results = fuse.search('India');
   
    if ( results == true){
    console.log(results); 
    } 
    else if(results == false){

      console.log("Product not found");
    }
    
     console.log(results);  
      console.log("---->> " + results.length);
