let images = [new ViewMaster("Strike", "./imgs/lightning.jpg", "lightning striking", "author N/A", 1994),
new ViewMaster("haha", "./imgs/lightning2.jpg", "lightning wow", "aut/A", 1998),]; 

// const img1 = new ViewMaster("Strike", "./imgs/lightning.jpg", "lightning striking", "author N/A", 1994); 
document.getElementById("title").innerHTML = images[0].title; 
document.getElementById("img").src = images[0].image; 
document.getElementById("description").innerHTML = images[0].description; 
document.getElementById("authorAndYear").innerHTML = images[0].author + ' ' + images[0].imgYear; 

function changeImg()
{
    let index = Math.floor(Math.random()*images.length);
    document.getElementById("title").innerHTML = images[index].title; 
    document.getElementById("img").src = images[index].image; 
    document.getElementById("description").innerHTML = images[index].description; 
    document.getElementById("authorAndYear").innerHTML = images[index].author + ' ' + images[index].imgYear;
    
    console.log('img change!'); 
}