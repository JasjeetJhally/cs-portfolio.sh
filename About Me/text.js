// This is where I handle the images, and the DJ Khaled quotes that appear when the images are clicked.
var image1 = document.getElementById("KhaledHi");

var dec1 = document.getElementById("whatup");

// This click function allows the user to click the image, and have a quote appear.
image1.addEventListener("click", function(){
    dec1.innerHTML = "LION!";
});

// This is a repeated version of the code above, only with a new image and quote.
var image2 = document.getElementById("KhaledIgnore");

var dec2 = document.getElementById("ignore");

image2.addEventListener("click", function(){
    dec2.innerHTML = "They dont want you to jetski";

});
