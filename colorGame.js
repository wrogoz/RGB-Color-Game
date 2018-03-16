var colors=generateRandomColors(6);

var squares = document.querySelectorAll(".square");
// stworzenie zmiennej do odgadnięcia
var pickedColor=pickColor();
//zaznaczenie zmiennej(rgb) w tagu h1
var colorDisplay=document.querySelector("#colorDisplay");
// wyswietlenie wartosci zmiennej do odgadnięcia 
colorDisplay.textContent=pickedColor;
// zmienna wyswietlająca rezultat klikniecia
var messageDisplay=document.querySelector("#message");

// nalozenie kolorow na kazdy z kwadratów
for(var i=0; i<squares.length; i++){

squares[i].style.backgroundColor=colors[i];


// dodanie clickListener na kwadraty
squares[i].addEventListener("click", function(){

// pobranie koloru z kliknietego kwadratu
var clickedColor=this.style.backgroundColor;


// porównanie tego koloru z docelowym 
if(clickedColor===pickedColor){
messageDisplay.textContent="Correct!";
changeColors(clickedColor);
}
else{
	this.style.backgroundColor= "#232323";
	messageDisplay.textContent="Try Again";
}



});

}

function changeColors(color){

for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=color;
}
}

// losowe wybieranie koloru docelowego z pośród 6 kwadratów (var colors)
function pickColor(){

	var random= Math.floor(Math.random()* colors.length);
	return colors[random];
}

// kreator losowych kolorów
function generateRandomColors(num){
//utworzenie array
var arr=[];
// dodanie num colors do array
for(var i=0; i<num; i++){

	arr.push(randomColor());

}
//zwrócenie

return arr;
}

function randomColor(){
// wybrać red 0-255
var r=Math.floor(Math.random()*256);
// wybrać green 0-255
var g=Math.floor(Math.random()*256);
// wybrać blue 0-255
var b=Math.floor(Math.random()*256);

return "rgb(" + r + ", " + g + ", " + b + ")"
}