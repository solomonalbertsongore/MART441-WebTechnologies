let images = [new ViewMaster("Chicago Protests: A Joyful Revolution", "./imgs/revolution.jpg", "A protest happening in Chicago", "Vashon Jordan Jr.", 2020),
new ViewMaster("Modernity", "./imgs/lynched.jpeg", "Protest regarding police brutality towards black people", "Malika Crutchfield", 2017),
new ViewMaster("I Can't Breathe", "./imgs/iCantBreathe.jpg", "At a George Floyd protest in Minneopolis, Minnesota", "Joshua Rashaad McFadden", 2020),
new ViewMaster("FIGHT FOR A BETTER TOMORROW", "./imgs/betterTmrw.jpg", "At a global climate change strike", "Markus Spiske", 2019),
new ViewMaster("The 2017 Womens March", "./imgs/womensMarch.jpg", "The Washington Women's March, 21 January, 2017", "Shannon Stapleton/Reuters", 2017),
]; 
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
    document.getElementById("authorAndYear").innerHTML = images[index].author + ', ' + images[index].imgYear;
    
    console.log('img change!'); 
}