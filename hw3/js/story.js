// window.alert("i am here"); 

var answeredYes = 0; 
var playerName; 

document.getElementById('scene1').style.visibility = "hidden"; 
document.getElementById('scene2').style.visibility = "hidden";
document.getElementById('scene3').style.visibility = "hidden";



document.getElementById('play').onclick = function() {playGame()}; 



document.getElementById('yes').onclick = function() {myFunction()};
document.getElementById('no').onclick = function() {endOfGame()};

function playGame()
{
    document.getElementById('scene1').style.visibility = "visible"; 
    document.getElementById('play').style.visibility = "hidden"; 

    // Get's the players name and shows it on the page
    let playerName = prompt("What is your name?"); 
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt
    if(playerName != "" && playerName != null)
    {
        document.getElementById('hiPlayer').innerHTML = "Hello " + playerName; 
    }
    else
    {
        document.getElementById('hiPlayer').innerHTML = "You should have entered a name :("; 
    }
}

function showSceneTwo()
{
    document.getElementById('scene2').style.visibility = "visible"; 
}

function showSceneThree()
{
    document.getElementById('scene3').style.visibility = "visible"; 
}

function myFunction()
{
    answeredYes += 1; 
    console.log(answeredYes); 
}

function endOfGame()
{
    if(answeredYes >= 7)
    {
        console.log("you're name has been cleared and you are free to go"); 
    }
    else if(answeredYes < 7 && answeredYes > 3)
    {
        console.log("you are suspicious, go to jail"); 
    }
    else if(answeredYes < 3)
    {
        console.log("you are certainly the culprit. enjoy you're coffin."); 
    }
}

