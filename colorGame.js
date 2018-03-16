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

var pickedColor=colors[3];

//zaznaczenie zmiennej(rgb) w tagu h1

var colorDisplay=document.querySelector("#colorDisplay");

// wyswietlenie wartosci zmiennej do odgadnięcia 

colorDisplay.textContent=pickedColor;


for(var i=0; i<squares.length; i++){

// nalozenie kolorow na kazdy z kwadratów

squares[i].style.backgroundColor=colors[i];

// dodanie clickListener na kwadraty

squares[i].addEventListener("click", function(){

// pobranie koloru z kliknietego kwadratu

var clickedColor=this.style.backgroundColor;

// porównanie tego koloru z docelowym 

if(clickedColor===pickedColor){
alert("yes");
}
else{
	alert("no");
}



});

}