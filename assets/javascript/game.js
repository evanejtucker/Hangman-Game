window.onload = function() {
// Global Variables
//------------------------------------------------------------

//arrays and variables for holding data
var options = ["batman", "superman", "aquaman", "shazam", "cyborg",
			   "wolverine", "daredevil", "firestorm", "colossus", "deadpool",
			   "spiderman", "magneto", "juggernaut", "apocalypse", "doomsday",
			   "scarecrow", "deathstroke", "ultron", "brainiac", "sinestro", 
			   "joker", "darkseid" ]; 
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
		blanksAndSuccesses.push("_");
	}

	//change HTML to meet game starting conditions
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	// document.getElementById("hangman-pic").src = "assets/images/hangman.png";

	

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
		if (guessesLeft < 10) {
			document.getElementById("guessesLeft").style.color = "red";
		}
	}

	// testing / debugging
	console.log(blanksAndSuccesses);
}

function roundComplete() {
	console.log("Wins: " + wins + " | Losses " + losses + " | Guesses Left " + guessesLeft);

	// update the html with the most recent information
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");

	// check if user won
	if(lettersInWord.toString() === blanksAndSuccesses.toString()) {
		wins++;
		heroSet();
		alert(blanksAndSuccesses.join("") + " is correct!");

		// update win counter and restart game when the user wins
		document.getElementById("wins").innerHTML = wins;
		
		startGame();
	}
	// check if user lost
	else if (guessesLeft == 0) {
		losses++;
		heroSet();
		alert("You Lost" + "\n" + "The correct ansswer was " + lettersInWord.join(""));
		

		//update HTML
		document.getElementById("losses").innerHTML = losses;
		startGame();
	}

}


// function to change picture when users guesses correct
 var heroSet = function() {
 	console.log("text");

 		document.getElementById("hangman-pic").style.height = "350px";
 		document.getElementById("hangman-pic").style.border = "solid 2px white";
 		document.getElementById("description").innerHTML = "Guess the letters correctly to form a word before your run out of guesses.";
 		document.getElementById("description").style.textAlign = "left";
 		document.getElementById("powers-tag").innerHTML = "Abilities:";

		if(selectedWord === "batman") {
			document.getElementById("hangman-pic").src = "assets/images/batman.jpg";
			document.getElementById("nameTag").innerHTML = "Batman";
			document.getElementById("description").innerHTML = "exceptional martial artist, combat strategy, inexhaustible wealth, brilliant deductive skill, advanced technology";
		}

		else if(selectedWord === "superman") {
			document.getElementById("hangman-pic").src = "assets/images/superman.jpg";
			document.getElementById("nameTag").innerHTML = "Superman";
			document.getElementById("description").innerHTML = "super strength, flight, invulnerability, super speed, heat vision, freeze breath, x-ray vision, superhuman hearing, healing factor";
		}

		else if(selectedWord === "aquaman") {
			document.getElementById("hangman-pic").src = "assets/images/aquaman.jpg";
			document.getElementById("nameTag").innerHTML = "Aquaman";
			document.getElementById("description").innerHTML = "super strength, durability, control over sea life, exceptional swimming ability, ability to breathe underwater";
		}

		else if(selectedWord === "shazam") {
			document.getElementById("hangman-pic").src = "assets/images/shazam.jpg";
			document.getElementById("nameTag").innerHTML = "Shazam";
			document.getElementById("description").innerHTML = "super strength, flight, invulnerability, super speed, superhuman hearing, healing factor, intelligence, magic";
		}

		else if(selectedWord === "cyborg") {
			document.getElementById("hangman-pic").src = "assets/images/cyborg.jpg";
			document.getElementById("nameTag").innerHTML = "Cyborg";
			document.getElementById("description").innerHTML = "super strength, advanced technology, instant weaponry, genius-level intellect, control over technology, computer hacking, durability, teleportation";
		}

		else if(selectedWord === "wolverine") {
			document.getElementById("hangman-pic").src = "assets/images/wolverine.jpg";
			document.getElementById("nameTag").innerHTML = "Wolverine";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "daredevil") {
			document.getElementById("hangman-pic").src = "assets/images/daredevil.jpg";
			document.getElementById("nameTag").innerHTML = "Daredevil";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "firestorm") {
			document.getElementById("hangman-pic").src = "assets/images/firestorm.jpg";
			document.getElementById("nameTag").innerHTML = "Firestorm";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "colossus") {
			document.getElementById("hangman-pic").src = "assets/images/colossus.jpg";
			document.getElementById("nameTag").innerHTML = "Colossus";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "deadpool") {
			document.getElementById("hangman-pic").src = "assets/images/deadpool.jpg";
			document.getElementById("nameTag").innerHTML = "Deadpool";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "spiderman") {
			document.getElementById("hangman-pic").src = "assets/images/spiderman.jpg";
			document.getElementById("nameTag").innerHTML = "Spiderman";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "magneto") {
			document.getElementById("hangman-pic").src = "assets/images/magneto.jpg";
			document.getElementById("nameTag").innerHTML = "Magneto";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "juggernaut") {
			document.getElementById("hangman-pic").src = "assets/images/juggernaut.jpg";
			document.getElementById("nameTag").innerHTML = "Juggernaut";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "apocalypse") {
			document.getElementById("hangman-pic").src = "assets/images/apocalypse.jpg";
			document.getElementById("nameTag").innerHTML = "Apocalypse";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "doomsday") {
			document.getElementById("hangman-pic").src = "assets/images/doomsday.jpg";
			document.getElementById("nameTag").innerHTML = "Doomsday";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "scarecrow") {
			document.getElementById("hangman-pic").src = "assets/images/scarecrow.jpg";
			document.getElementById("nameTag").innerHTML = "Scarecrow";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "deathstroke") {
			document.getElementById("hangman-pic").src = "assets/images/deathstroke.jpg";
			document.getElementById("nameTag").innerHTML = "Deathstroke";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "ultron") {
			document.getElementById("hangman-pic").src = "assets/images/ultron.jpg";
			document.getElementById("nameTag").innerHTML = "Ultron";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "brainiac") {
			document.getElementById("hangman-pic").src = "assets/images/brainiac.jpg";
			document.getElementById("nameTag").innerHTML = "Brainiac";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "sinestro") {
			document.getElementById("hangman-pic").src = "assets/images/sinestro.jpg";
			document.getElementById("nameTag").innerHTML = "Sinestro";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "joker") {
			document.getElementById("hangman-pic").src = "assets/images/joker.jpg";
			document.getElementById("nameTag").innerHTML = "The Joker";
			document.getElementById("description").innerHTML = "";
		}

		else if(selectedWord === "darkseid") {
			document.getElementById("hangman-pic").src = "assets/images/darkseid.jpg";
			document.getElementById("nameTag").innerHTML = "Darkseid";
			document.getElementById("description").innerHTML = "";
		}

			else {
				document.getElementById("hangman-pic").src = "assets/images/hangman.png";
				document.getElementById("hangman-pic").style.height = "250px";
			 	document.getElementById("description").innerHTML = "Guess the letters correctly to form a word before your run out of guesses.";
	
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