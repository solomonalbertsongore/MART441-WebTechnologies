var blankImages = ['./images/black.jpg', './images/black.jpg', './images/black.jpg', './images/black.jpg',
'./images/black.jpg', './images/black.jpg', './images/black.jpg', './images/black.jpg', './images/black.jpg'
, './images/black.jpg']; 

var randomImages = ['./images/bird.png', './images/charizard.png', './images/diamond.png', './images/egg.png', './images/evee.png', './images/fancy.png', 
'./images/floof.png', './images/grassPokemon', './images/starterGrass', './images/whale.png']; 

var index = 0; 

// console.log(blankImages.length + 'blank'); 
// console.log(randomImages.length + 'random');

/*
function showImages()
{
    var img = document.createElement('img'); 
    for(i = 0; i < blankImages.length; i++)
    {
        img.src = blankImages[index]; 
        document.getElementById('imagesContainter').appendChild(img); 
    }
}

function showImages2()
{
    for(var i = 0; i < blankImages.length; i++)
    {
        document.getElementById("imagesContainer").src = blankImages.src; 
    }
}
*/

function createImages()
{
    var img = document.createElement('img'); 
    for(var i = 0; i < blankImages.length; i++)
    {
        img = document.createElement('img'); 
        img.src = blankImages[i]; 
        document.getElementById('imagesContainer').appendChild(img); 
    }
}