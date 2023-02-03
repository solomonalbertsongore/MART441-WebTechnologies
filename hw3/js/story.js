// window.alert("i am here"); 

var answeredYes = 0; 



document.getElementById('yes').onclick = function() {myFunction()};

document.getElementById('no').onclick = function() {endOfGame()};


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

