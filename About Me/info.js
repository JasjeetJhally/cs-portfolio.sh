/* item 1 is used for the Warriors, both the image and the information from the dropdown are presented below, in addition to the function that enables the user to click on the team logo, and drop down the information.*/
var item1 = document.getElementById("warriorimage");

var info1 = document.getElementById("warriorsinfo");

/*Here is both the function that allows the logo to be clickable, and the description for the Warriors*/
item1.addEventListener("click", function(){
    info1.innerHTML = "The Golden State Warriors are a basketball team located in Oakland, California, where their home court, Oracle Arena, is found. Since 1971, the Warriors have been representing the golden state of California, specifically the Bay Area. The team was founded in 1946, and plays in the Pacific division of the NBA. In the 2014-2015 season, the Warriors won the NBA Championship, 40 years after their previous championship win. ";
   
});

/* item 2 is used for the Giants, both the image and the information from the dropdown are presented below, in addition to the function that enables the user to click on the team logo, and drop down the information.*/      
var item2 = document.getElementById("giantsimage");

var info2 = document.getElementById("giantsinfo");

/*Here is both the function that allows the logo to be clickable, and the description for the Giants*/
item2.addEventListener("click", function(){
    info2.innerHTML = "San Francisco Giants, a professional baseball franchise, is located in San Francisco, California. The team was established in 1883, and has been representing San Francisco since 1958. Currently, the Giants play in their stadium, AT&T Park, and have played there since 2000. Some of the team nicknames include The Orange and Black, Los Gigantes, The G-Men, The Jints, The Gyros, and The Boys from the Bay.";
   
});   

/* item 3 is used for the Sharks, both the image and the information from the dropdown are presented below, in addition to the function that enables the user to click on the team logo, and drop down the information.*/      
var item3 = document.getElementById("sharksimage");

var info3 = document.getElementById("sharksinfo");

/*Here is both the function that allows the logo to be clickable, and the description for the Sharks*/
item3.addEventListener("click", function(){
    info3.innerHTML = "The San Jose Sharks are a professional ice hockey team based in San Jose, California. In the year 1991, the Sharks were founded in San Jose. The Sharks are members of the Pacific Division of the Western Conference of the National Hockey League. Deep Pacific teal, burnt orange, black, and white are the teams colors, and the team mascot is named SJ Sharkie. The Sharks have won six division championships, their most recent one being in the 2010-2011 season. ";
   
}); 

/* item 4 is used for the Niners, both the image and the information from the dropdown are presented below, in addition to the function that enables the user to click on the team logo, and drop down the information.*/      
var item4 = document.getElementById("ninersimage");

var info4 = document.getElementById("ninersinfo");

/*Here is both the function that allows the logo to be clickable, and the description for the Niners*/
item4.addEventListener("click", function(){
    info4.innerHTML = "The San Francisco 49ers are a professional American football team located in San Francisco. The 49ers are currently a part of the West Division of the National Football Conference (NFC) in the National Football League (NFL). The team was founded in 1946, and has been a part of the NFC since 1970. Red, white, gold, and black are the teams colors, and their mascot is named Sourdough Sam.";
   
}); 




                       
