
var numberOfPickedLetters = 0;
var maximumNumberOfLetters = 9;

var vowelsSource = [ 	{ letter: 'A', distribution: 15 },
						{ letter: 'E', distribution: 21 },
						{ letter: 'I', distribution: 13 },
						{ letter: 'O', distribution: 13 },
						{ letter: 'U', distribution: 5 } ];  

var consonantsSource = [	{ letter: 'B', distribution: 2 },
							{ letter: 'C', distribution: 3 },
							{ letter: 'D', distribution: 6 },
							{ letter: 'F', distribution: 2 },
							{ letter: 'G', distribution: 3 },
							{ letter: 'H', distribution: 2 },
							{ letter: 'J', distribution: 1 },
							{ letter: 'K', distribution: 1 },
							{ letter: 'L', distribution: 5 },
							{ letter: 'M', distribution: 4 },
							{ letter: 'N', distribution: 8 },
							{ letter: 'P', distribution: 4 },
							{ letter: 'Q', distribution: 1 },
							{ letter: 'R', distribution: 9 },
							{ letter: 'S', distribution: 9 },
							{ letter: 'T', distribution: 9 },
							{ letter: 'V', distribution: 1 },
							{ letter: 'X', distribution: 1 },
							{ letter: 'Y', distribution: 1 },
							{ letter: 'Z', distribution: 1 } ];

var vowels;
var consonants;

$(document).ready(function(){

	initialiseLetters();
	$("#addLetterContainer").on('click', 'button', function(){
		var letterType = $(this).data('letter-type');
		
		var nextLetter = numberOfPickedLetters + 1;
		var randomLetter = getRandomLetter(letterType);
		$("#letters li:nth-child(" + nextLetter + ") input").val(randomLetter);
		numberOfPickedLetters ++;

		if (numberOfPickedLetters == maximumNumberOfLetters){
			$('#addLetterContainer').hide(1000);
			$('#addWordContainer').show(1000);
		}
	});

	$('#makeGuess').on('click', function(){
		var guess = $('#word').val();
		addGuessToList(guess);
		$('#word').val('').focus();
	});
});

function letterSourceToArrary(letterSource){
	var letterArray = [];
	for (var i = letterSource.length - 1; i >= 0; i--) {
		for (var y = letterSource[i].distribution - 1; y >= 0; y--) {
			letterArray.push(letterSource[i].letter);	
		};
	};
	return letterArray;	
}

function initialiseLetters(){
	vowels = shuffle(letterSourceToArrary(vowelsSource));
	consonants = shuffle(letterSourceToArrary(consonantsSource));
}

function addGuessToList(guess){
	var length = guess.length;
	$('#' + length + 'letters').append('<li>' + guess + '</li>');
}

function getRandomLetter(type){
	var letters = getLetters(type);
	return letters.pop();
}

function getLetters(type){
	if (type =="vowel"){
		return vowels;
	}

	return consonants;
}

function shuffle(array){
	for (var i = 0; i < 6; i++) {
		array = knuthFisherYatesShuffle(array);
	};
	return array;
}

function knuthFisherYatesShuffle(array){
	var i, temp, j, len = array.length;
	for (var i = 0; i < len; i++) {
		j = ~~(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	};
	return array;
}