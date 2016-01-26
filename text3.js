// This is where I handle the images, and the DJ Khaled quotes that appear when the images are clicked.
var image3 = document.getElementById("KhaledKey");

var dec3 = document.getElementById("key");

// This click function allows the user to click the image, and have a quote appear.
image3.addEventListener("click", function(){
    dec3.innerHTML = "There will be roadblocks, but we will overcome them";
});

// This is a repeated version of the code above, only with a new image and quote.
var image4 = document.getElementById("KhaledPunch");

var dec4 = document.getElementById("punch");

image4.addEventListener("click", function(){
    dec4.innerHTML = "Another one, no, another two";
});