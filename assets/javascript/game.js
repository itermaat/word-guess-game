

var phrases = ["Badger", "Jaguar", "Eagle", "Parrot", "Gecko", "Scorpion", "Shark", "Dolfin", "Elephant", "Squirrel", "Penguin"];
var lettersGuessed;
var wins=0;
var guesses;
var count = 0;
var current = phrases[count];
var dashedWord = dashes(current).join(" ");
var finished = false;


function displayLength(word){
	for(var i=0; i<word.length; i++){
		document.write("_ ");
	}
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function repeatLetter(c){
	for(var i=0; i<lettersGuessed.length; i++){
		if(lettersGuessed[i] == c){
			return true;
		}
	}
	return false;
}

function printLetter(){
	var guess = event.key;
	console.log(guess);
	if((isLetter(guess) == true) && (repeatLetter(guess) == false))
		lettersGuessed.push(guess);

}

function dashes(word){
	var temp = ["_  ", "_  "];
	for(var i=0; i<word.length-2; i++){
		temp.push("_  ");
	}
	return temp;
}
document.onkeyup = printLetter;












