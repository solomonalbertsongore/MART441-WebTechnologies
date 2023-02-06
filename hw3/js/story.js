/* SIONO credits: 
    - Forrest Bauer
    - Lucas
    - Kait 
    - Ryan Knowles
*/

var answeredYes = 0; 
var playerName; 

// Hides all of game elements on page load 
// I think there would be a better way to do this with an array but I'm not sure? 
document.getElementById('titleAndPlay').style.display = "none"; 
document.getElementById('testimony').style.display = "none"; 
document.getElementById('scene1').style.display = "none"; 
document.getElementById('scene2').style.display = "none";
document.getElementById('scene3').style.display = "none";
document.getElementById('scene4').style.display = "none";
document.getElementById('scene5').style.display = "none";
document.getElementById('scene6').style.display = "none";
document.getElementById('scene7').style.display = "none";
document.getElementById('scene8').style.display = "none";
document.getElementById('scene9').style.display = "none";
document.getElementById('scene10').style.display = "none";
document.getElementById('finalScene').style.display = "none";

// If user accepts, play game
document.getElementById('warningYes').onclick = function() {warningBypass()};
// Closes browser if user doesn't want to play
document.getElementById('warningNo').onclick = function() {closeGame()}; 
// Play button - starts the game
document.getElementById('play').onclick = function() {playGame()}; 
document.getElementById('continue').onclick = function() {showSceneOne()}; 

/* For some reason, the stuff below didn't work. However when I added the function in the actual 
HTML doc it worked. So the answeredYes() function is in the button now instead of in this doc. 
// document.getElementById('yes1').onclick = function() {testClick()};
// document.getElementById('yes').onclick = function() {correctAnswer()};
// document.getElementById('no').onclick = function() {endOfGame()};

/*
function testClick()
{
    console.log('i have been clicked'); 
}
*/

function warningBypass()
{
    document.getElementById('titleAndPlay').style.display = "inline"; 
    document.getElementById('contentAlert').style.display = "none"; 
}

function closeGame()
{
    window.close(); 
}

function playGame()
{
    document.getElementById('testimony').style.display = "inline"; 
    document.getElementById('play').style.display = "none"; 

    // Get's the players name and shows it on the page
    let playerName = prompt("What is your name?"); 
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt
    if(playerName != "" && playerName != null)
    {
        document.getElementById('hiPlayer').innerHTML = "Police 1: So let me get this straight <em>" + playerName + "</em>. You remember <strong>nothing</strong> from last night? We have your testimony here...this is what you said last night: "; 
    }
    else
    {
        document.getElementById('hiPlayer').innerHTML = "You should have entered a name :("; 
    }
}

function correctAnswer()
{
    answeredYes += 1; 
    console.log(answeredYes); 
}

function showSceneOne()
{
    document.getElementById('scene1').style.display = "inline"; 
    document.getElementById('testimony').style.display = "none"; 

}


function showSceneTwo()
{
    document.getElementById('scene2').style.display = "inline"; 
    document.getElementById('scene1').style.display = "none"; 

}

function showSceneThree()
{
    document.getElementById('scene3').style.display = "inline"; 
    document.getElementById('scene2').style.display = "none"; 

}

function showSceneFour()
{
    document.getElementById('scene4').style.display = "inline"; 
    document.getElementById('scene3').style.display = "none"; 

}

function showSceneFive()
{
    document.getElementById('scene5').style.display = "inline"; 
    document.getElementById('scene4').style.display = "none"; 

}

function showSceneSix()
{
    document.getElementById('scene6').style.display = "inline"; 
    document.getElementById('scene5').style.display = "none"; 

}

function showSceneSeven()
{
    document.getElementById('scene7').style.display = "inline"; 
    document.getElementById('scene6').style.display = "none"; 

}

function showSceneEight()
{
    document.getElementById('scene8').style.display = "inline"; 
    document.getElementById('scene7').style.display = "none"; 

}

function showSceneNine()
{
    document.getElementById('scene9').style.display = "inline"; 
    document.getElementById('scene8').style.display = "none"; 

}

function showSceneTen()
{
    document.getElementById('scene10').style.display = "inline"; 
    document.getElementById('scene9').style.display = "none"; 
}

function endOfGame()
{
    document.getElementById('finalScene').style.display = "inline"; 
    document.getElementById('scene10').style.display = "none"; 


    if(answeredYes >= 7)
    {
        document.getElementById('determination').innerHTML = "Police 1: So" + playerName + ", after questioning, we have decided you are not guilty. You are free to go."; 
    }
    else if(answeredYes < 7 && answeredYes > 3)
    {
        document.getElementById('determination').innerHTML = "Police 1: So" + playerName + ", after questioning, we have decided you are suspicious. Hope you like iron bars."; 
    }
    else if(answeredYes < 3)
    {
        document.getElementById('determination').innerHTML = "Police 1: So" + playerName + ", This doesn't add up. Enjoy you're coffin."; 
    }
}

