

/*var images = ['./imgs/bird.png', './imgs/charizard.png', './imgs/diamond.png', './imgs/egg.png', './imgs/evee.png', 
'./imgs/bird.png', './imgs/charizard.png', './imgs/diamond.png', './imgs/egg.png', './imgs/evee.png']; 
*/

let images = [new fadedImg('./imgs/bird.png', "This is a bird", 'square'),
new fadedImg('./imgs/charizard.png', "This is a dragon", 'circle'),
new fadedImg('./imgs/diamond.png', "This is a weird lizard", 'rectangle'),
new fadedImg('./imgs/egg.png', "This is an egg", 'trapezoid'),
new fadedImg('./imgs/evee.png', "This is a cute fox/dog", 'parallelogram'),
]; 



for(let i = 0; i < images.length; i++)
{
    loopStuff(); 

    if(i === 5)
    {
        loopStuff(); 
    }
}

function loopStuff()
{
    $(document).ready(function (){

        // $('#fadedImg').fadeIn('slow').fadeOut('slow').$('#fadedImg').attr('src', randomImage); 
        $.each(images, function(i)
        {
        $('#fadedImg').fadeIn(2000).fadeOut(2000, function(){
        $('#fadedImg').attr('src', images[i].image)})
        .fadeIn(2000);

        $('#words').fadeIn(2000).fadeOut(2000, function(){
        $('#words').text(images[i].words)})
        .fadeIn(2000);
        
        // setInterval(changeTxtBig(), 500); 
        setInterval(changeTxtSmall, 500);

        $('#shape').fadeIn(5000).fadeOut(5000, function(){
        $('#shape').attr('class', images[i].shape)})
        .fadeIn(1000);

        $('#shape').animate({height: '200px', width: '200px'}, 2000).animate({height: '50px', width: '50px'}, 2000);  
        $('#shape').animate({left: '250px', right: '250px'}, 2000).animate({left: '50px', right: '50px'}, 2000);  

        /*
        $('#shape').animate({height: '200px', width: '200px', right: '250px'
        }, 2000).animate({height: '50px', width: '50px', left: '250px'}, 2000);  
        */

        // $('.shape').attr('class', images[i].shape); 
        
        })
    })
}

function changeTxtBig()
{
    $('#words').css('fontSize', '55px')
}

function changeTxtSmall()
{
    $('#words').css('fontSize', '22px')
}


/*
    $(function () {});
    $(document).ready(function (){

        // $('#fadedImg').fadeIn('slow').fadeOut('slow').$('#fadedImg').attr('src', randomImage); 
        $.each(images, function(i)
        {
        $('#fadedImg').fadeIn(2000).fadeOut(2000, function(){
        $('#fadedImg').attr('src', images[i].image)})
        .fadeIn(2000);

        $('#words').fadeIn(2000).fadeOut(2000, function(){
        $('#words').text(images[i].words)})
        .fadeIn(2000);
        })
    });*/