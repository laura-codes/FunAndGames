Array.prototype.randomElement = function(){
				return this[Math.floor(Math.random() * this.length)]
			}

var numberOfPickedLetters = 0;
var maxLetters = 9;

var vowels = [ 'A', 'E', 'I', 'O', 'U' ];
var consonants = [ 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z' ];

$(document).ready(function(){
	$("#letters").on('click', 'button', function(){
		var letterType = $(this).data('letter-type');
		
		var nextLetter = numberOfPickedLetters + 1;
		var randomLetter = getRandomLetter(letterType);
		$("#letters li:nth-child(" + nextLetter + ") input").val(randomLetter);
		numberOfPickedLetters ++;
	});

	$('#makeGuess').on('click', function(){
		var guess = $('#word').val();
		addGuessToList(guess);
	});
});

function addGuessToList(guess){
	var length = guess.length;
	$('#' + length + 'letters').append('<li>' + guess + '</li>');
}

function getRandomLetter(type){
	var letters = getLetters(type);
	return letters.randomElement();
}

function getLetters(type){
	if (type =="vowel"){
		return vowels;
	}

	return consonants;
}