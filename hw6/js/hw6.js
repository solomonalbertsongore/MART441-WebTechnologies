// black images array
var blankImages = ['./images/black.jpg', './images/black.jpg', './images/black.jpg', './images/black.jpg',
'./images/black.jpg', './images/black.jpg', './images/black.jpg', './images/black.jpg', './images/black.jpg'
, './images/black.jpg']; 

// random images array
var randomImages = ['./images/bird.png', './images/charizard.png', './images/diamond.png', './images/egg.png', './images/evee.png', 
'./images/bird.png', './images/charizard.png', './images/diamond.png', './images/egg.png', './images/evee.png']; 

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
        /* creating an img element
        Sources: 
        - https://stackoverflow.com/questions/25151339/how-to-display-images-from-a-javascript-array-object-starting-with-the-first-im
        */ 
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

        /* the thought behind this is that if I could compare the image src urls then I could check to 
        see if player clicked two images with the same src and then give them a point based off that...
        but I don't think this will work. It has to be through ID's*/ 
        /* I also think I need to create the actual image twice in a new array with the same id - check this
        article out when you have time next: https://stackoverflow.com/questions/70005096/how-to-use-only-twice-the-same-item-in-an-array-in-js
        */ 
        if(document.getElementById(elementId) == randomImage)
        {
            console.log(information.attempts + 1 + " // The player has scored!"); 
        }
        console.log(elementId); 
    })
}

/* more sorces referenced in project
- https://stackoverflow.com/questions/64946880/replace-main-image-with-the-clicked-one
- https://makersaid.com/array-of-images-in-javascript/
*/ 

function playerInfo()
{
    var information = {"fName": document.getElementById("fname").value, "lName": document.getElementById("lname").value, "age": document.getElementById("age").value, "attempts": 0};
    // document.getElementById('info').innerHTML = information; 
    localStorage.setItem("information", JSON.stringify(information)); 
    // console.log(information.fName + information.lName + information.age + information.attempts); 
}

function getInfo() 
{
    var information = localStorage.getItem("information"); 
    document.getElementById("info").innerHTML = "<h1>Name: " + JSON.parse(information).fName + " " + 
    JSON.parse(information).lName + 
    "<br />Age: " + JSON.parse(information).age + 
    "<br />Attempts: " + JSON.parse(information).attempts +"</h1>"; 
}


function changePage()
{
    window.location = "./game.html"; 
    // console.log('i am here'); 
}


