
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage ="dice" +randomNumber1 +".png";
var randomImageSource = "images/" + randomDiceImage;
// document.querySelectorAll("img")[0];
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
// var randomDiceImage2 ="dice" +randomNumber2 +".png";
var randomImageSource2 = "images/dice" + randomNumber2+ ".png";
// document.querySelectorAll("img")[0];
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
;
