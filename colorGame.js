var colors=[
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"

];

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

function pickColor(){

	var random= Math.floor(Math.random()* colors.length);
	return colors[random];
}