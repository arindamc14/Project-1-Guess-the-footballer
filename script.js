//button.addEventListener("click", function(){
//	if (currentInput === '') {
//		alert("Please enter your name");

//	else {
//		return initiate (currentInput);
//	}
//});

var display = function( data ){
	var displayElement = document.querySelector('#output');
	displayElement.innerHTML = "";
    output.innerText = data;
    };

document.querySelector('#input').addEventListener('change', function(event){
	var currentInput = event.target.value;
	if (turns ===1) {

		newQuestion = generateQueston();
		var question = document.getElementById("question");
		var newItem = document.createElement('a');
		newItem.textContent = newQuestion;
		question.appendChild(newItem);
	}
	else {
		var result = inputHappened(currentInput);
    	display( result );
    }
	});
    

var footballersData = [
	{
	name: 'thierry henry' , 
	description: 'I started my career in Frace with AS Monaco. But earned my fame playing in North London for Arsenal in the early 2000s. Subsequently I had 2 final stints in Barcelone and in Major League Soccer', 
	imgSource: 'to be entered' 
	},
	{
	name: 'david beckham' , 
	description: 'I have received much following on and off the pitch. I started off playing for my boyhood club under Alex Ferguson. However after a spat, I moved to Real Madrid', 
	imgSource: 'to be entered' 
	},
	{
	name: 'lionel messi' , 
	description: 'I have been in Barcelona my whole career. Many people call me the goat!', 
	imgSource: 'to be entered' 
	}
];
//var bailoutCard = footballersData[].imgSource;

console.log(footballersData);

var attemptNumber = 0;
var attemptsLeft = 3;
var secretWord = [];
var guessedLetters = [];
var turns = 0;

var initiate = function(currentInput) {
	var name = currentInput;
	turns ++;
	return "Hello " + name + " Are you ready to test your football players knowledge? For each level, you will be given 4 chances to guess the letter. If you fail to guess the player in 4 attempts you fail. Fret not, you are also given 3 bailout cards which will show you a photo of the player."

}
var generateQueston = function() {
	var randomIndex = Math.floor(Math.random()*3);
	console.log(randomIndex);
	secretWord = footballersData[randomIndex].name.split("");
	console.log(secretWord);
	turns ++;
	console.log(footballersData[randomIndex].description);

	return footballersData[randomIndex].description;
}


var checkWithInput = function(currentInput) {
  
  for (var i = 0; i < secretWord.length; i++){
    if (secretWord[i] === currentInput) {
      answer = true;
      return answer;
    }
    else {
      var answer = false;
    }
  }
  return answer;
  
}

var inputHappened = function(currentInput){
  console.log( currentInput );
  if (turns === 0) {
  	return initiate(currentInput);
  }
  
  else {
  	if (checkWithInput(currentInput) === false && attemptsLeft === 0){
    	return "Game Over";
  	}		
  	else if (checkWithInput(currentInput) === false && attemptsLeft > 0){
    	attemptNumber++;
    	attemptsLeft = (attemptsLeft - attemptNumber);
    	console.log(attemptsLeft);
    	return "you guessed wrong, you have " + attemptsLeft + " tries left";

  	} 
    else if (checkWithInput(currentInput) === true) {
    	guessedLetters.push(currentInput);
      	console.log(guessedLetters)
      	if (guessedLetters.length === secretWord.length) {
      		// To generate the next question
      		turns = 1;
      		// clear up the question element
      		question.innerHTML = "";

        	return "Well done, you got it! Your next question is..."
      }
    
      else {
        return "You guessed right! Guess the next letter";
      }
    }
}
}
    