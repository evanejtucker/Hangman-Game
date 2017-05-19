window.onload = function() {
var alphabet = ["a", "b", "c", "d", "e", "f", 
				"g", "h", "i", "j", "k", "l", 
				"m", "n", "o", "p", "q", "r", 
				"s", "t", "u", "v", "w", "z", 
				"y", "z"]
var rand_ruler; 
var word;

var rulers = ["Nebuchadnezzar_II",
			  "Augustus_Caesar", 
			  "Xerxes_I", 
			  "Genghis_Khan", 
			  "Agamemnon", 
			  "Charlemagne"];



// selects random ruler, which will be used as question.
rand_ruler = rulers[Math.floor(Math.random() * rulers.length)];
word = rand_ruler.replace((/\s/g, "-"));


for (i=0; i<rand_ruler.length; i++) {
	if (rand_ruler[i]==="_") {
		console.log(" ");
		word.innerHTML = "_";
	}

	else {
		console.log("_");
		word[i] = "_";
	}
}
document.getElementById("question").innerHTML = word;



}