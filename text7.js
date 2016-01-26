// This is where I handle the images, and the DJ Khaled quotes that appear when the images are clicked.
var image7 = document.getElementById("KhaledSmart");

var dec7 = document.getElementById("smart");

// This click function allows the user to click the image, and have a quote appear.
image7.addEventListener("click", function(){
    dec7.innerHTML = "They dont want to jet ski.";
});

// This is a repeated version of the code above, only with a new image and quote.
var image8 = document.getElementById("KhaledSmart1");  

var dec8 = document.getElementById("smart1");

image8.addEventListener("click", function(){
    dec8.innerHTML = "They will try to close the door on you, just open it.";
});