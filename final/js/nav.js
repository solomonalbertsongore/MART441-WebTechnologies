var closeIcon = document.getElementById("closeIcon"); 
var menuIcon = document.getElementById("menuIcon"); 
var x = document.getElementById("myLinks");


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      // jQuery for fancy hamburger navigation
      $("#myLinks").fadeOut(function ()
      {
        // console.log('animation complete'); 
        x.style.display = "none"; 
        // $("#myLinks").style("display", "none"); 
      });
      // x.style.display = "none"; 
      closeIcon.style.display = "none"; 
      menuIcon.style.display = "block"; 
    } else {
      // x.style.display = "block";
      $("#myLinks").fadeIn(); 
      closeIcon.style.display = "block"; 
      menuIcon.style.display = "none"; 
    }
  }

function scrollToTop()
{
  window.scrollTo({top: 0, behavior: 'smooth'});
}

closeIcon.style.display = "none"; 
x.style.display = "none"; 

/*
$(document).ready(function ()
{
  $(".hamburger").click(function()
  {
    $("#myLinks").fadeIn(); 
  })
})
*/
/*
$("#hamburger").click(function(){
  $("#myLinks").fadeIn();
  // $("#div2").fadeIn("slow");
  // $("#div3").fadeIn(3000);
});
*/