var closeIcon = document.getElementById("closeIcon"); 
var menuIcon = document.getElementById("menuIcon"); 


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      closeIcon.style.display = "none"; 
      menuIcon.style.display = "block"; 
    } else {
      x.style.display = "block";
      closeIcon.style.display = "block"; 
      menuIcon.style.display = "none"; 
    }
  }

closeIcon.style.display = "none"; 