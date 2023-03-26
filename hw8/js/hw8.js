

/*var images = ['./imgs/bird.png', './imgs/charizard.png', './imgs/diamond.png', './imgs/egg.png', './imgs/evee.png', 
'./imgs/bird.png', './imgs/charizard.png', './imgs/diamond.png', './imgs/egg.png', './imgs/evee.png']; 
*/

let images = [new fadedImg('./imgs/bird.png', "A protest happening in Chicago"),
new fadedImg('./imgs/charizard.png', "A protest happening in Chicago"),
new fadedImg('./imgs/diamond.png', "A protest happening in Chicago"),
new fadedImg('./imgs/egg.png', "A protest happening in Chicago"),
new fadedImg('./imgs/evee.png', "A protest happening in Chicago"),
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
        $.each(images, function()
        {
        $('#fadedImg').fadeIn('slow').fadeOut('slow', function(){
        $('#fadedImg').attr('src', images[1].image)})
        .fadeIn('slow');

        $('#words').fadeIn('slow').fadeOut('slow', function(){
        $('#words').text(images[1].words)})
        .fadeIn('slow');

        timesCnt++; 
        console.log(timesCnt); 
         

        })
    });



