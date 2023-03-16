const img1 = new ViewMaster("Strike", "./imgs/lightning.jpg", "lightning striking", "author N/A", 1994); 
document.getElementById("title").innerHTML = img1.title; 
document.getElementById("img").src = img1.image; 
document.getElementById("authorAndYear").innerHTML = img1.author + ' ' + img1.imgYear; 
