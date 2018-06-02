

var phrases = ["Badger", "Jaguar", "Eagle", "Parrot", "Gecko", "Scorpion", "Shark"];
var lettersGuessed = [];
var wins=0;
var guesses;
var current;


function getRandomInt(max){
	max++;
	return Math.floor(Math.random() * max);
}

function displayLength(word){
	for(var i=0; i<word.length; i++){
		document.write('_');
	}
}









