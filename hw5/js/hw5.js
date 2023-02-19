// black images array
var blankImages = ['./images/black.jpg', './images/black.jpg', './images/black.jpg', './images/black.jpg',
'./images/black.jpg', './images/black.jpg', './images/black.jpg', './images/black.jpg', './images/black.jpg'
, './images/black.jpg']; 

// random images array
var randomImages = ['./images/bird.png', './images/charizard.png', './images/diamond.png', './images/egg.png', './images/evee.png', './images/fancy.png', 
'./images/floof.png', './images/grassPokemon.png', './images/starterGrass.png', './images/whale.png']; 

// var index = 0; 
// id number for random images
var imgNumber = 0; 


function createImages()
{
    // var img = document.createElement('img');
    // this will hold the selected img
    var img;  
    // for every image in the array, create a new img element, and assign it to the images container div
    for(var i = 0; i < blankImages.length; i++)
    {
        // creating an img element
        img = document.createElement('img'); 
        // assigning the img src (this is based off of number in array)
        img.src = blankImages[i]; 
        /* setting the id of the created img
        Source: 
        - https://stackoverflow.com/questions/9422974/createelement-with-id
        */
        img.setAttribute("id", "img" + imgNumber);
        /* assigning the img an onclick function (we have to do this when its created)
        Source: 
        - https://stackoverflow.com/questions/95731/why-does-an-onclick-property-set-with-setattribute-fail-to-work-in-ie
        */ 
        img.onclick = function() {showImage()}; 
        // adding the new image to the images container
        document.getElementById('imagesContainer').appendChild(img);
        // incrementing the imgNumber var so we can get a new id for each img
        imgNumber++; 
    }
}

function showImage()
{
    /* This gets the img id, so we can change it
    Source: 
    - https://makersaid.com/id-of-clicked-dom-element-javascript/
    */
    document.addEventListener('click', (e) => 
    {
        // setting a local var and getting the clicked elements id
        let elementId = e.target.id; 
        // console.log(elementId); 
        
        /* Setting a random img on click (not sure how to sync quite yet)
        Source: 
        - https://css-tricks.com/snippets/javascript/select-random-item-array/
        */ 
        var randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
        // changing the img relative url to match actual img
        document.getElementById(elementId).src = randomImage; 
    })
}

