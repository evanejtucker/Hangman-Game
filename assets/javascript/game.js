window.onload = function() {
// Global Variables
//------------------------------------------------------------

//arrays and variables for holding data
var options = ["batman", "superman", "aquaman", "shazam", "cyborg",
			   "wolverine", "daredevil", "firestorm", "colossus", "deadpool",
			   "spiderman"]; 
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

//game counters
var wins = 0;
var losses = 0;
var guessesLeft = 7;

// Functions
//------------------------------------------------------------

var startGame = function() {
	selectedWord = options[Math.floor(Math.random() * options.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;

	// reset variables
	guessesLeft = 10;
	wrongGuesses = [];
	blanksAndSuccesses = [];

	// Populate blanks and successes with correct number of blanks.
	for(i=0; i<numBlanks; i++) {
		if (lettersInWord[i] === "_") {
			blanksAndSuccesses.push("-");
		}
		else {
			blanksAndSuccesses.push("_");
		}
	}

	//change HTML to meet game starting conditions
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	// document.getElementById("hangman-pic").src = "assets/images/hangman.png";

	// play sound when game start: test
	var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "../sounds/batman.mp3");
    audioElement.play();
	

	// testing / debugging
	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
	//check if letter exists in string at all
	var isLetterInWord = false;

	for(i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}

	// find where letter exists in the selected word, the replace
	// the successesAndBlanks with the correct letter
	if(isLetterInWord) {
		for(i=0; i<numBlanks; i++) {
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}
	// letter wasnt found 
	else {
		wrongGuesses.push(letter);
		guessesLeft--;
	}

	// testing / debugging
	console.log(blanksAndSuccesses);
}

function roundComplete() {
	console.log("Wins: " + wins + " | Losses " + losses + " | Guesses Left " + guessesLeft);

	// update the html with the most recent information
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses;

	// check if user won
	if(lettersInWord.toString() === blanksAndSuccesses.toString()) {
		wins++;
		alert("You Won");
		heroSet();

		// update win counter and restart game when the user wins
		document.getElementById("wins").innerHTML = wins;
		startGame();
	}
	// check if user lost
	else if (guessesLeft == 0) {
		losses++;
		alert("You Lost");
		heroSet();

		//update HTML
		document.getElementById("losses").innerHTML = losses;
		startGame();
	}

}

// function to change picture when users guesses correct
 var heroSet = function() {
 	console.log("text");

		if(selectedWord === "batman") {
			document.getElementById("hangman-pic").src = "assets/images/batman.jpg";
			// document.getElementById("hangman-pic").setAttribute("id", "heroImage");
			document.getElementById("nameTag").innerHTML = "Batman";
			// document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "superman") {
			document.getElementById("hangman-pic").src = "assets/images/superman.jpg";
			// document.getElementById("hangman-pic").setAttribute("id", "heroImage");
			document.getElementById("nameTag").innerHTML = "Superman";
		}

		else if(selectedWord === "aquaman") {
			document.getElementById("hangman-pic").src = "assets/images/aquaman.jpg";
			// document.getElementById("hangman-pic").setAttribute("id", "heroImage");
			document.getElementById("nameTag").innerHTML = "Aquaman";
		}

		else if(selectedWord === "shazam") {
			document.getElementById("hangman-pic").src = "assets/images/shazam.jpg";
			// document.getElementById("hangman-pic").setAttribute("id", "heroImage");
			document.getElementById("nameTag").innerHTML = "Shazam";
		}

		else if(selectedWord === "cyborg") {
			document.getElementById("hangman-pic").src = "assets/images/cyborg.jpg";
			// document.getElementById("hangman-pic").setAttribute("id", "heroImage");
			document.getElementById("nameTag").innerHTML = "Cyborg";
		}

		else if(selectedWord === "wolverine") {
			document.getElementById("hangman-pic").src = "assets/images/wolverine.jpg";
			// document.getElementById("hangman-pic").setAttribute("id", "heroImage");
			document.getElementById("nameTag").innerHTML = "Wolverine";
		}

		else if(selectedWord === "daredevil") {
			document.getElementById("hangman-pic").src = "assets/images/daredevil.jpg";
			// document.getElementById("hangman-pic").setAttribute("id", "heroImage");
			document.getElementById("nameTag").innerHTML = "Daredevil";
		}

		else if(selectedWord === "firestorm") {
			document.getElementById("hangman-pic").src = "assets/images/firestorm.jpg";
			// document.getElementById("hangman-pic").setAttribute("id", "heroImage");
			document.getElementById("nameTag").innerHTML = "Firestorm";
		}

		else if(selectedWord === "colossus") {
			document.getElementById("hangman-pic").src = "assets/images/colossus.jpg";
			// document.getElementById("hangman-pic").setAttribute("id", "heroImage");
			document.getElementById("nameTag").innerHTML = "Colossus";
		}

		else if(selectedWord === "deadpool") {
			document.getElementById("hangman-pic").src = "assets/images/deadpool.jpg";
			// document.getElementById("hangman-pic").setAttribute("id", "heroImage");
			document.getElementById("nameTag").innerHTML = "Deadpool";
		}

		else if(selectedWord === "spiderman") {
			document.getElementById("hangman-pic").src = "assets/images/spiderman.jpg";
			// document.getElementById("hangman-pic").setAttribute("id", "heroImage");
			document.getElementById("nameTag").innerHTML = "Spiderman";
		}
}

// Main Process
//------------------------------------------------------------

startGame();
// changePic();

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
	

	// testing / debugging
	console.log(letterGuessed);
}

}