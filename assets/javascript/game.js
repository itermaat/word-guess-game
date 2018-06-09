

var phrases = ["ladybug", "centipede", "Pufferfish", "Eagle", "Parrot", "Butterfly", "Scorpion", "Shark", "Dolfin", "Elephant", "Squirrel", "Penguin", "Pigeon", "Mosquito"];
var lettersGuessed = [];
var wins=0;
var currentguess;
var count = 0;
var current = phrases[count];
var dashedWord = dashes(current)//.join(" ");
var finished = false;
var lives = 7;


/*function getRand(){
	var max = phrases.length;
	var num = Math.floor(Math.random() * max);
	return num;
}*/

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

function updateArray(b){
	for(var i=0; i<current.length; i++)
		if(current[i] == b){
			dashedWord[i] = b;
		}

}

function printLetter(){
		var guess = event.key;
		if(current.includes(guess)){
			updateArray(guess);
			document.getElementById("word").innerHTML = "Word: " + dashedWord.join(" ");
		}
		if(current.includes(guess) == false){
			if(lives >0)
				lives--;
			document.getElementById("lives").innerHTML = "Lives: " + lives;
		}
	
		if((isLetter(guess) == true) && (repeatLetter(guess) == false) && (guess != 'Meta')){
			document.getElementById("guessed").innerHTML += guess + " ";
			lettersGuessed.push(guess);
		}
	
}


function dashes(word){
	var temp = ["_  ", "_  "];
	for(var i=0; i<word.length-2; i++){
		temp.push("_  ");
	}
	return temp;
}

function wordComplete(){
	for(var i=0; i<dashedWord.length; i++){
		if(dashedWord[i] == "_ "){
			return false
		}
	}
	return true;
}


document.onkeyup = printLetter;












