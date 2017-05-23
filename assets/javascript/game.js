window.onload = function() {

$(document).ready(function() {
// Global Variables
//------------------------------------------------------------

//arrays and variables for holding data
var options = ["batman", "superman", "aquaman", "shazam", "cyborg", "hulk", 
			   "wolverine", "daredevil", "firestorm", "colossus", "deadpool", "rorschach", 
			   "spiderman", "magneto", "juggernaut", "apocalypse", "doomsday",
			   "scarecrow", "deathstroke", "ultron", "brainiac", "sinestro", "penguin", 
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


// sound array 
var soundArray = ["assets/sounds/batman-theme.mp3", "assets/sounds/captainplanet24.mp3", "assets/sounds/superman-theme.mp3", 
				  "assets/sounds/spiderman-theme.mp3", "assets/sounds/legionOfDoom.mp3", "assets/sounds/superfriends-theme.mp3",
				  "assets/sounds/aquaman-theme.mp3", "assets/sounds/hulk-theme.mp3", "assets/sounds/shazam-theme.mp3" ];

// select theme sound
var selectedSound = selectedSound = soundArray[Math.floor(Math.random()* soundArray.length)];;


// sound
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", selectedSound);


// hint audio
var audioElement_theme = document.createElement("audio");

// character sound
var audioElement_character = document.createElement("audio");



// Functions
//------------------------------------------------------------

var startGame = function() {
	selectedWord = options[Math.floor(Math.random() * options.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;
	selectedSound = soundArray[Math.floor(Math.random()* soundArray.length)];



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
	document.getElementById("guessesLeft").style.color = "black";
	document.getElementById("hint-answer").innerHTML = "";

	

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
				document.getElementById("guessesLeft").style.color = "#4CC417";
			}

			if (guessesLeft < 8) {
				document.getElementById("guessesLeft").style.color = "orange";
			}

			if (guessesLeft < 4) {
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
		if (wins >= 1) {
			document.getElementById("wins").style.color = "#4CC417";
		}

		heroSet();
		// alert(blanksAndSuccesses.join("") + " is correct!");

		// update win counter and restart game when the user wins
		document.getElementById("wins").innerHTML = wins;
		
		startGame();
	}
	// check if user lost
	else if (guessesLeft == 0) {
		losses++;
		if (losses >= 1) {
			document.getElementById("losses").style.color = "red";
		}

		heroSet();
		// alert("You Lost" + "\n" + "The correct ansswer was " + lettersInWord.join(""));
		

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
 		document.getElementById("description").innerHTML = "Guess the letters to form the name of a superhero or villain before your run out of guesses.";
 		document.getElementById("description").style.textAlign = "left";
 		document.getElementById("powers-tag").innerHTML = "Abilities:";
 		audioElement.setAttribute("src", selectedSound);
 		

		if(selectedWord === "batman") {
			document.getElementById("hangman-pic").src = "assets/images/batman.jpg";
			document.getElementById("nameTag").innerHTML = "Batman";
			document.getElementById("description").innerHTML = "Exceptional martial artist, combat strategy, inexhaustible wealth, brilliant deductive skill, advanced technology";
			audioElement_character.setAttribute("src", "assets/sounds/batman.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "superman") {
			document.getElementById("hangman-pic").src = "assets/images/superman.jpg";
			document.getElementById("nameTag").innerHTML = "Superman";
			document.getElementById("description").innerHTML = "Super strength, flight, invulnerability, super speed, heat vision, freeze breath, x-ray vision, superhuman hearing, healing factor";
			audioElement_character.setAttribute("src", "assets/sounds/superman.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "aquaman") {
			document.getElementById("hangman-pic").src = "assets/images/aquaman.jpg";
			document.getElementById("nameTag").innerHTML = "Aquaman";
			document.getElementById("description").innerHTML = "Super strength, durability, control over sea life, exceptional swimming ability, ability to breathe underwater";
			audioElement_character.setAttribute("src", "assets/sounds/aquaman.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "shazam") {
			document.getElementById("hangman-pic").src = "assets/images/shazam.jpg";
			document.getElementById("nameTag").innerHTML = "Shazam";
			document.getElementById("description").innerHTML = "Super strength, flight, invulnerability, super speed, superhuman hearing, healing factor, intelligence, magic";
			audioElement_character.setAttribute("src", "assets/sounds/shazam.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "cyborg") {
			document.getElementById("hangman-pic").src = "assets/images/cyborg.jpg";
			document.getElementById("nameTag").innerHTML = "Cyborg";
			document.getElementById("description").innerHTML = "Super strength, advanced technology, instant weaponry, genius-level intellect, control over technology, computer hacking, durability, teleportation";
			audioElement_character.setAttribute("src", "assets/sounds/cyborg_1.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "hulk") {
			document.getElementById("hangman-pic").src = "assets/images/hulk.jpg";
			document.getElementById("nameTag").innerHTML = "Hulk";
			document.getElementById("description").innerHTML = "Bruce Banner: Genius-level intellect.         Hulk: Superhuman strength & Superhuman durability";
			audioElement_character.setAttribute("src", "assets/sounds/hulk.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "wolverine") {
			document.getElementById("hangman-pic").src = "assets/images/wolverine.jpg";
			document.getElementById("nameTag").innerHTML = "Wolverine";
			document.getElementById("description").innerHTML = "Superhuman senses, agility, reflexes, and animal-like attributes, extended longevity via regenerative healing factor, adamantium-plated skeleton, retractable bone claws, skilled hand-to-hand combatant";
			audioElement_character.setAttribute("src", "assets/sounds/wolverine.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "daredevil") {
			document.getElementById("hangman-pic").src = "assets/images/daredevil.jpg";
			document.getElementById("nameTag").innerHTML = "Daredevil";
			document.getElementById("description").innerHTML = "Peak human physical and mental condition highly skilled acrobat, martial artist and hand-to-hand combatant, radar sense, superhuman sense, utilization of specially-designed club";
			audioElement_character.setAttribute("src", "assets/sounds/daredevil.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "firestorm") {
			document.getElementById("hangman-pic").src = "assets/images/firestorm.jpg";
			document.getElementById("nameTag").innerHTML = "Firestorm";
			document.getElementById("description").innerHTML = "Flight, super strength, energy blasts, radiation absorption, atomic/molecular rearrangement and restructuring";
			audioElement_character.setAttribute("src", "assets/sounds/firestorm.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "colossus") {
			document.getElementById("hangman-pic").src = "assets/images/colossus.jpg";
			document.getElementById("nameTag").innerHTML = "Colossus";
			document.getElementById("description").innerHTML = "Transformation of body into steel-like substance granting superhuman strength and durability";
			audioElement_character.setAttribute("src", "assets/sounds/colossus.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "deadpool") {
			document.getElementById("hangman-pic").src = "assets/images/deadpool.jpg";
			document.getElementById("nameTag").innerHTML = "Deadpool";
			document.getElementById("description").innerHTML = "Regenerative healing factor, skilled marksman, swordsman, and hand-to-hand combatant, extended longevity, utilizes magic satchel and devices granting teleportation and holographic disguise";
			audioElement_character.setAttribute("src", "assets/sounds/deadpool.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "rorschach") {
			document.getElementById("hangman-pic").src = "assets/images/rorschach.jpg";
			document.getElementById("nameTag").innerHTML = "Rorschach";
			document.getElementById("description").innerHTML = "Acrobatics, Espionage, Advanced hand-to-hand combatant, Interrogation and intimidation, Journalism, Genius intellect, Great physical strength, Speed and agility, Indomitable will";
			audioElement_character.setAttribute("src", "assets/sounds/rorschach.mp3");
			audioElemen_character.play();
		}

		else if(selectedWord === "spiderman") {
			document.getElementById("hangman-pic").src = "assets/images/spidermanDancing.gif";
			document.getElementById("hangman-pic").style.height = "250px";
			document.getElementById("nameTag").innerHTML = "Spiderman";
			document.getElementById("description").innerHTML = "Genius-level intellect, superhuman strength, speed, and agility, ability to cling to most surfaces, precognitive Spider-sense, utilizes web-shooters to shoot strong spider-web strings from wrists";
			audioElement_character.setAttribute("src", "assets/sounds/spiderman.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "magneto") {
			document.getElementById("hangman-pic").src = "assets/images/magneto.jpg";
			document.getElementById("nameTag").innerHTML = "Magneto";
			document.getElementById("description").innerHTML = "Magnetism manipulation and generation of magnetic force fields, flight through magnetic fields, helmet shields against telepathic attacks";
			audioElement_character.setAttribute("src", "assets/sounds/magneto.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "juggernaut") {
			document.getElementById("hangman-pic").src = "assets/images/juggernaut.jpg";
			document.getElementById("nameTag").innerHTML = "Juggernaut";
			document.getElementById("description").innerHTML = "Superhuman strength and durability, invulnerability via mystical force field, virtually unstoppable momentum, immunity to mental attacks via his helmet";
			audioElement_character.setAttribute("src", "assets/sounds/juggernaut.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "apocalypse") {
			document.getElementById("hangman-pic").src = "assets/images/apocalypse.jpg";
			document.getElementById("nameTag").innerHTML = "Apocalypse";
			document.getElementById("description").innerHTML = "Genius-level intellect, telekinesis, telepathy, technology manipulation, matter manipulation, matter transmutation, self-molecular manipulation: (teleportation, immortality, invulnerability, regenerative healing factor, shapeshifting, godlike strength, stamina, speed and reflexes), energy Manipulation";
			audioElement_character.setAttribute("src", "assets/sounds/apocalypse.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "doomsday") {
			document.getElementById("hangman-pic").src = "assets/images/doomsday.jpg";
			document.getElementById("nameTag").innerHTML = "Doomsday";
			document.getElementById("description").innerHTML = "Super strength, invulnerability, super speed, healing factor, superhuman agility";
			audioElement_character.setAttribute("src", "assets/sounds/doomsday.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "scarecrow") {
			document.getElementById("hangman-pic").src = "assets/images/scarecrow.jpg";
			document.getElementById("nameTag").innerHTML = "Scarecrow";
			document.getElementById("description").innerHTML = "Intelligence, Fear provocation";
			audioElement_character.setAttribute("src", "assets/sounds/scarecrow.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "deathstroke") {
			document.getElementById("hangman-pic").src = "assets/images/deathstroke.jpg";
			document.getElementById("nameTag").innerHTML = "Deathstroke";
			document.getElementById("description").innerHTML = "Exceptional martial artist, combat strategy, durability, enhanced strength and speed, weapons expert, superhuman agility, master swordsman";
			audioElement_character.setAttribute("src", "assets/sounds/deathstroke.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "ultron") {
			document.getElementById("hangman-pic").src = "assets/images/ultron.jpg";
			document.getElementById("nameTag").innerHTML = "Ultron";
			document.getElementById("description").innerHTML = "Artificial intelligence with genius-level intellect, abilities via robotic body vary but generally include: (superhuman strength, speed, durability, flight, and energy blasts)";
			audioElement_character.setAttribute("src", "assets/sounds/ultron.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "brainiac") {
			document.getElementById("hangman-pic").src = "assets/images/brainiac.jpg";
			document.getElementById("nameTag").innerHTML = "Brainiac";
			document.getElementById("description").innerHTML = "Alien technology, Genius-level intellect";
			audioElement_character.setAttribute("src", "assets/sounds/brainiac.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "sinestro") {
			document.getElementById("hangman-pic").src = "assets/images/sinestro.jpg";
			document.getElementById("nameTag").innerHTML = "Sinestro";
			document.getElementById("description").innerHTML = "Hard light constructs, instant weaponry, force fields, flight, durability, alien technology, fear provocation, intelligence";
			audioElement_character.setAttribute("src", "assets/sounds/sinestro.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "penguin") {
			document.getElementById("hangman-pic").src = "assets/images/penguin.jpg";
			document.getElementById("nameTag").innerHTML = "Penguin";
			document.getElementById("description").innerHTML = "Criminal mastermind, master armed/unarmed combatant and tactician, utilizes weaponized umbrellas and other equipment";
			audioElement_character.setAttribute("src", "assets/sounds/penguin.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "joker") {
			document.getElementById("hangman-pic").src = "assets/images/joker.jpg";
			document.getElementById("nameTag").innerHTML = "The Joker";
			document.getElementById("description").innerHTML = "Complete unpredictability, intelligence";
			audioElement_character.setAttribute("src", "assets/sounds/joker1.mp3");
			audioElement_character.play();
		}

		else if(selectedWord === "darkseid") {
			document.getElementById("hangman-pic").src = "assets/images/darkseid.jpg";
			document.getElementById("nameTag").innerHTML = "Darkseid";
			document.getElementById("description").innerHTML = "super strength, invulnerability, genius-level intellect, combat strategy, alien technology, teleportation, energy blasts";
			audioElement_character.setAttribute("src", "assets/sounds/darkseid.mp3");
			audioElement_character.play();
		}

			else {
				document.getElementById("hangman-pic").src = "assets/images/hangman.png";
				document.getElementById("hangman-pic").style.height = "250px";
			 	document.getElementById("description").innerHTML = "Guess the letters correctly to form a word before your run out of guesses.";
	
			}
}

// hints function
var hint = function() {

		document.getElementById("hint-answer").innerHTML = "hint hint hint";
		audioElement_theme.setAttribute("src", "assets/sounds/riddleMeThis.mp3");
		audioElement.pause();

	if (guessesLeft < 6) {

		audioElement_theme.play();

		if(selectedWord === "batman") {
			document.getElementById("hint-answer").innerHTML = "has no superpowers";
		}

		else if(selectedWord === "superman") {
			document.getElementById("hint-answer").innerHTML = " Faster than a speeding bullet";
		}

		else if(selectedWord === "aquaman") {
			document.getElementById("hint-answer").innerHTML = "talks to fish";
		}

		else if(selectedWord === "shazam") {
			document.getElementById("hint-answer").innerHTML = "Has the wisdom of solomon";
		}

		else if(selectedWord === "cyborg") {
			document.getElementById("hint-answer").innerHTML = "Man and machine";
		}

		else if(selectedWord === "hulk") {
			document.getElementById("hint-answer").innerHTML = "Gama Radiation";
		}

		else if(selectedWord === "wolverine") {
			document.getElementById("hint-answer").innerHTML = "Canadian x-man";
		}

		else if(selectedWord === "daredevil") {
			document.getElementById("hint-answer").innerHTML = "Man without fear";
		}

		else if(selectedWord === "firestorm") {
			document.getElementById("hint-answer").innerHTML = "Master of fision and fusion";
		}

		else if(selectedWord === "colossus") {
			document.getElementById("hint-answer").innerHTML = "Turns into metal";
		}

		else if(selectedWord === "deadpool") {
			document.getElementById("hint-answer").innerHTML = "Breaks the fourth wall";
		}

		else if(selectedWord === "rorschach") {
			document.getElementById("hint-answer").innerHTML = "Ink blot test";
		}

		else if(selectedWord === "spiderman") {
			document.getElementById("hint-answer").innerHTML = "From Queens";
		}

		else if(selectedWord === "magneto") {
			document.getElementById("hint-answer").innerHTML = "Master of metal";
		}

		else if(selectedWord === "juggernaut") {
			document.getElementById("hint-answer").innerHTML = "Half brother of professor X";
		}

		else if(selectedWord === "apocalypse") {
			document.getElementById("hint-answer").innerHTML = "Mutant numero uno";
		}

		else if(selectedWord === "doomsday") {
			document.getElementById("hint-answer").innerHTML = "Killed Superman";
		}

		else if(selectedWord === "scarecrow") {
			document.getElementById("hint-answer").innerHTML = "uses fear as a weapon";
		}

		else if(selectedWord === "deathstroke") {
			document.getElementById("hint-answer").innerHTML = "a.k.a Slade Wilson";
		}

		else if(selectedWord === "ultron") {
			document.getElementById("hint-answer").innerHTML = "Has no strings on him";
		}

		else if(selectedWord === "brainiac") {
			document.getElementById("hint-answer").innerHTML = "Smartest man in the universe";
		}

		else if(selectedWord === "sinestro") {
			document.getElementById("hint-answer").innerHTML = "really into the color yellow";
		}

		else if(selectedWord === "penguin") {
			document.getElementById("hint-answer").innerHTML = "Flightless bird";
		}

		else if(selectedWord === "joker") {
			document.getElementById("hint-answer").innerHTML = "Completely crazy";
		}

		else if(selectedWord === "darkseid") {
			document.getElementById("hint-answer").innerHTML = "Ruler of Apokolips";
		}
	}
	else {
		document.getElementById("hint-answer").innerHTML = "only when guesses left less than 6";
		audioElement_theme.setAttribute("src", "assets/sounds/notToday.mp3");
		audioElement_theme.play();
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


$(".play-button").on("click", function() {
        audioElement.play();
        audioElement_character.pause();
      });

$(".pause-button").on("click", function() {
        audioElement.pause();
        audioElement_theme.pause();
        audioElement_character.pause();
      })

$(".hint-button").on("click", function() {
        hint()
      })

$("#footer").on("click", function() {
	audioElement_theme.setAttribute("src", "assets/sounds/legionOfDoom.mp3");
	audioElement_theme.play();
});

$("#hangman-pic").on("click", function() {
        audioElement_character.play();
      })


});

}