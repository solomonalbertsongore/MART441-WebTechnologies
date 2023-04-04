// retrieve/display data
$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("./json/pokedex.json", function(result){
      $.each(result, function(i, field){
        $("div").append(JSON.stringify(field));
      });
    })

    $('div').stylish();
  });
});

// plugin 
$.fn.stylish = function() 
{
    this.css('background-color', 'black'); 
    this.css('color', 'white'); 
    this.css('font-size', 12); 
}


/*$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("./json/pokedex.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + "hi: ");
      });
    });
  });
});
*/
