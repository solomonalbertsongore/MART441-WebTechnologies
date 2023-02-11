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
document.getElementById('credits').style.display = "none";


// If user accepts, play game
document.getElementById('warningYes').onclick = function() {warningBypass()};
// Closes browser if user doesn't want to play
document.getElementById('warningNo').onclick = function() {closeGame()}; 
// Play button - starts the game
document.getElementById('play').onclick = function() {playGame()}; 
document.getElementById('continue').onclick = function() {showSceneOne()}; 
// document.getElementById('creditBtn').onclick = function() {credits()}; 


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
    document.getElementById('titleImg').style.display = "none"; 

    // Get's the players name and shows it on the page
    playerName = prompt("What is your name?"); 
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

function endOfChapterOne()
{
    document.getElementById('finalScene').style.display = "inline"; 
    document.getElementById('scene10').style.display = "none"; 


    if(answeredYes >= 7)
    {
        document.getElementById('determination').innerHTML = "Police 1: So " + playerName + ", after questioning, we have decided you are not guilty. You are free to go."; 
        document.getElementById('options').innerHTML = "<br />Do you: <br /><br />- Go home <br />- Ask more about Candyland "; 
    }
    else if(answeredYes < 7 && answeredYes >= 3)
    {
        document.getElementById('determination').innerHTML = "Police 1: So " + playerName + ", after questioning, we have decided you are suspicious. Hope you like iron bars."; 
        document.getElementById('options').innerHTML = "<br />Potential answers: <br /><br />- You have nothing on me <br />- I would like to speak to my attorney "; 
    }
    else if(answeredYes < 3)
    {
        document.getElementById('determination').innerHTML = "Police 1: So " + playerName + ", This doesn't add up. Enjoy you're coffin."; 
        document.getElementById('options').innerHTML = "<br />Do you: <br /><br />- Get up and run <br />- Go for the police officers gun "; 
    }
}


/* ----- CHAPTER TWO ----- */ 

document.getElementById('nextScene').style.display = "none";
document.getElementById('restartBtn').style.display = "none";  
document.getElementById('restartGame').style.display = "none"; 


//vdocument.getElementById('btnSubmit').onclick = function() {getAnswer()}; 

function getAnswer()
{
    var answer = document.getElementById('txtAnswer').value; 
    // console.log(answer); 
    // console.log('im here'); 

    if(answer === 'go home' || answer === 'Go home' || answer == 'Go Home')
    {
        console.log('home');
        document.getElementById('answer1').innerHTML = "Safe travels back home, sorry for the inconvience."
        document.getElementById('nextScene').style.display = "inline";
        document.getElementById('finalScene').style.display = "none";  
        document.getElementById('restartBtn').style.display = "inline"; 

    }
    else if(answer === 'Ask more about candyland' || answer === 'Ask more about Candyland' || answer == 'ask more about candyland')
    {
        console.log('candy');
        document.getElementById('answer1').innerHTML = "Candy Land is one of the largest drug operations in Zoogrande's history - add more later :)."
        document.getElementById('nextScene').style.display = "inline";
        document.getElementById('finalScene').style.display = "none";  
        document.getElementById('restartBtn').style.display = "inline"; 

    }
    else if(answer === 'You have nothing on me' || answer === 'you have nothing on me' || answer == 'You Have Nothing On Me')
    {
        console.log('candy');
        document.getElementById('answer1').innerHTML = "Oh really :)?"
        document.getElementById('nextScene').style.display = "inline";
        document.getElementById('finalScene').style.display = "none";  
        document.getElementById('restartBtn').style.display = "inline"; 

    }
    else if(answer === 'I would like to speak to my attorney' || answer === 'I would like to speak to my attorney.')
    {
        console.log('candy');
        document.getElementById('answer1').innerHTML = "Very well, what's there number?"
        document.getElementById('nextScene').style.display = "inline";
        document.getElementById('finalScene').style.display = "none";  
        document.getElementById('restartBtn').style.display = "inline"; 

    }
    else if(answer === 'Run' || answer === 'RUN' || answer === 'run')
    {
        console.log('candy');
        document.getElementById('answer1').innerHTML = "*You stand up and go for the door as fast as you can, but before you get to it a bullet lands right between your shoulder blades. You fall to the ground, paralyzed, the shadow of the policemen looming over your helpless body. BAM. All goes black. "
        document.getElementById('nextScene').style.display = "inline";
        document.getElementById('finalScene').style.display = "none";  
        document.getElementById('restartBtn').style.display = "inline"; 

    }
    else if(answer === 'Go for the police officers gun' || answer === 'Go for the Police officers gun')
    {
        console.log('candy');
        document.getElementById('answer1').innerHTML = "*You lunge your body across the table, hands outstrechted. The policeman casually scoots back in his chair, and pulls out his knife. He stabs your end and you are stuck to the table. He pulls out his gun and aims right at your forehead. All goes black. "
        document.getElementById('nextScene').style.display = "inline";
        document.getElementById('finalScene').style.display = "none";  
        document.getElementById('restartBtn').style.display = "inline"; 

    }
    else
    {
        console.log('i am sorry, i couldnt undersatnd you'); 
    }

}

function credits()
{
    document.getElementById('credits').style.display = "inline"; 
    document.getElementById('finalScene').style.display = "none"; 
    document.getElementById('nextScene').style.display = "none"; 
}

// Loop/Do-while loop (not sure where to implement this yet). 
function restartOption()
{
    restart = false; 
    do 
    {
        document.getElementById('restartGame').style.display = "inline"; 
    }
    while(restart);
}