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

/* 
$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("./json/pokedex.json", function(result){
      $.each(result, function(i, field){
        $("div").append(JSON.stringify(field[7]));
      });
    })

    $('div').stylish();
  });
});
*/ 

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

/*
$(document).ready(function(){
  $("button").click(function(){
    showPokemon(); 
});

    $('div').stylish();
  });

function showPokemon() 
{
    {
        $("#dataDiv").html("Name: " + pokemon.name 
        + "<br>Type:" + pokemon.type + "<br>Height:" + pokemon.height + "<br>Weight:" 
        + pokemon.weight + "<br>Image:<br>" +
        pokemon.img);
    }
}
*/