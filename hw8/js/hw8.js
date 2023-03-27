

/*var images = ['./imgs/bird.png', './imgs/charizard.png', './imgs/diamond.png', './imgs/egg.png', './imgs/evee.png', 
'./imgs/bird.png', './imgs/charizard.png', './imgs/diamond.png', './imgs/egg.png', './imgs/evee.png']; 
*/

let images = [new fadedImg('./imgs/bird.png', "This is a bird"),
new fadedImg('./imgs/charizard.png', "This is a dragon"),
new fadedImg('./imgs/diamond.png', "This is a weird lizard"),
new fadedImg('./imgs/egg.png', "This is an egg"),
new fadedImg('./imgs/evee.png', "This is a cute fox/dog"),
]; 

var timesCnt = 0; 


for(let i = 0; i < images.length; i++)
{
    // var randomImage = images[Math.floor(Math.random() * images.length)];
    var img = images[i]; 

};

    $(function () {});
    $(document).ready(function () {
        // $('#fadedImg').fadeIn('slow').fadeOut('slow').$('#fadedImg').attr('src', randomImage); 
        $.each(images, function(i)
        {
        $('#fadedImg').fadeIn(2000).fadeOut(2000, function(){
        $('#fadedImg').attr('src', images[i].image)})
        .fadeIn(2000);

        $('#words').fadeIn(2000).fadeOut(2000, function(){
        $('#words').text(images[i].words)})
        .fadeIn(2000);

        timesCnt++; 
        console.log(timesCnt); 
         

        })
    });



