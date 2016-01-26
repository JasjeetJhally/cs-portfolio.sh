// This is where I handle the images, and the DJ Khaled quotes that appear when the images are clicked.
var image5 = document.getElementById("KhaledYes");

var dec5 = document.getElementById("yes");

// This click function allows the user to click the image, and have a quote appear.
image5.addEventListener("click", function(){
    dec5.innerHTML = "I changed.. a lot.";
});

// This is a repeated version of the code above, only with a new image and quote.
var image6 = document.getElementById("KhaledNo");

var dec6 = document.getElementById("no");

image6.addEventListener("click", function(){
    dec6.innerHTML = "This is a special cloth alert.";
});
              