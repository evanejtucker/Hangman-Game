window.onload = function() {
// Global Variables
//------------------------------------------------------------

//arrays and variables for holding data
var categories = [ 
					["nebuchadnezzar_ii","augustus_caesar", "xerxes_i", 
			  		 "genghis_khan", "agamemnon", "charlemagne"],
			  		["rhinoceros", "elephant", "wombat", "ostrich", "panther", 
			  		 "marmot", "falcon"],
			  		["saturn", "neptune", "mars", "venus", "earth", "mercury"],
			  		["superman", "batman", "aquaman", "shazam", "nightwing", 
			  		 "daredevil", "cyborg"]
			  	 ];
var selectedCategory; 
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

startGame = function() {
	selectedCategory = categories[Math.floor(Math.random() * categories.length)];
	selectedWord = selectedCategory[Math.floor(Math.random() * selectedCategory.length)];
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
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses + " ";

	// check if user won
	if(lettersInWord.toString() == blanksAndSuccesses.toString()) {
		wins++;
		alert("You Won");

		// update win counter and restart game when the user wins
		document.getElementById("wins").innerHTML = wins;
		startGame();
	}
	// check if user lost
	else if (guessesLeft == 0) {
		losses++;
		alert("You Lost");

		//update HTML
		document.getElementById("losses").innerHTML = losses;
		startGame();
	}

}

// Main Process
//------------------------------------------------------------

startGame();

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	// testing / debugging
	console.log(letterGuessed);
}

}