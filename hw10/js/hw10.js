class Square{
    constructor(x, y, height, width, color)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }
  
    setX(x)
    {
       this.x = x;
    }
    setY(y)
    {
       this.y = y;
    }
    setHeight(height)
    {
       this.height = height;
    }
    setWidth(width)
    {
       this.width = width;
    }
    setColor(color)
    {
        this.color = color;
    }
    get theX()
    {
        return this.x;
    }
    get theY()
    {
        return this.y;
    }
    get theHeight()
    {
        return this.height;
    }
    get theWidth()
    {
        return this.width;
    }
    get theColor()
    {
        return this.color;
    }
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;
drawSquare();
var colorArray = ['black', 'red', 'blue', 'white', 'grey'];
var randomColor; 

function drawSquare()
{
  ctx.clearRect(0,0,800,600);
  square1 = new Square(x,y,15,15,"pink");
  ctx.fillStyle = square1.theColor;
  ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);

  square2 = new Square(x2,y2,100,100,"yellow");
  ctx.fillStyle = square2.theColor;
  ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight); 
}

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
        moveAround(); 
    });
});

/*
$(document).ready(function(){
    moveAround();
})
*/

function getKey(event)
{
    randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

    // console.log(randomColor); 

    var didCollide = hasCollided(square1, square2);
    if(didCollide)
        {
        // window.alert("ouch!");
        // console.log('my color is: ' + randomColor);
        $('#myCanvas').css('background-color', randomColor);
        square1.setHeight(square1.theHeight + 20); 
        square1.setWidth(square1.theWidth + 20); 
        square2.setHeight(square2.theHeight - 20);
        square2.setWidth(square2.theWidth - 20); 
        // drawSquare(); 
        }
        var char = event.which || event.keyCode;
        var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
        {
            moveUp();
        }
    else if(actualLetter == "s")
        {
            moveDown();
        }
    else if(actualLetter == "d")
        {
            moveRight();
        }
    else if(actualLetter == "a")
        {
            moveLeft();
        }
    
    drawSquare();
    edgeCheck(); 
}

function moveUp()
{
    y-=10;
}

function moveDown()
{
    y+=10;
}
function moveLeft()
{
    x-=10;
}
function moveRight()
{
    x+=10;
}

function moveAround()
{
    y2 = Math.random() * (550 - 10) + 10;; 
    x2 = Math.random() * (550 - 10) + 10;; 
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function edgeCheck()
{
    if(square1.x >= 600)
    {
        console.log('out of bounds x'); 
    }
    if(square1.y >= 600)
    {
        console.log('out of bounds y'); 
    }
    if(square1.x <= 0)
    {
        console.log('out of bounds x'); 
    }
    if(square1.y <= 0)
    {
        console.log('out of bounds y'); 
    }
}