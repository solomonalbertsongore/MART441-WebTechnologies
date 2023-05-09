var closeIcon = document.getElementById("closeIcon"); 
var menuIcon = document.getElementById("menuIcon"); 
var x = document.getElementById("myLinks");

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

/*
$("#hamburger").click(function(){
  $("#myLinks").fadeIn();
  // $("#div2").fadeIn("slow");
  // $("#div3").fadeIn(3000);
});
*/