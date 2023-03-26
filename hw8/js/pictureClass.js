class fadedImg 
{
    constructor(image, words, shape) 
    { 
    this.image = image; 
    this.words = words; 
    this.shape = shape; 
    }

    drawShape()
    {
        //THIS IS A SQUARE
        context.fillStyle = "red";
        context.fillRect(10, 100, 50, 50)
    }
}
