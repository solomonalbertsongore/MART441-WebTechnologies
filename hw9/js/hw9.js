$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("./json/pokedex.json", function(result){
      $.each(result, function(i, field){
        $("div").append(JSON.stringify(field));
      });
    });
  });
});

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
