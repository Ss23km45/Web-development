var randomNumber = getRndInteger(1,6);
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var image = "dice"+randomNumber+".png";
var imageSource="images/"+image;




var randomNumber1=getRndInteger(1,6);
var image1 = "dice"+randomNumber+".png";
var imageSource1="images/"+image;
document.getElementsByTagName("img")[1].setAttribute("src", "images/dice"+randomNumber1+".png");
document.getElementsByTagName("img")[0].setAttribute("src", "images/dice"+randomNumber+".png");

if(randomNumber>randomNumber1){
    document.getElementById("heading4").innerHTML="Player1 wins";

}else if(randomNumber<randomNumber1){
    document.getElementById("heading4").innerHTML="Player2 wins";
}else{
    document.getElementById("heading4").innerHTML="Its Draw try again..";
}

