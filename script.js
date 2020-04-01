//button.addEventListener("click", function(){
//  if (currentInput === '') {
//    alert("Please enter your name");

//  else {
//    return initiate (currentInput);
//  }
//});
var attemptNumber = 0;
var attemptsLeft = 4;
var secretWord = [];
var guessedLetters = [];
var gameState = 0;
var randomIndex;
var foundIndex;
var userAnswer = [];
var userAnswerString; 
var moreThanOneLetter = 0;
var answer = false;
var score = 0;
//var newStr;

var footballersData = [
  {
  name: 'thierry henry' , 
  description: 'I started my career in Frace with AS Monaco. But earned my fame playing in North London for Arsenal in the early 2000s. Subsequently I had 2 final stints in Barcelone and in Major League Soccer', 
  imgSource: 'to be entered' 
  },
  {
  name: 'david beckham' , 
  description: 'I have received much following on and off the pitch. I even got married to a British celebrity. I started off playing for my boyhood club under Alex Ferguson. However after a spat, I moved to Real Madrid', 
  imgSource: 'to be entered' 
  },
  {
  name: 'lionel messi' , 
  description: 'I have been in Barcelona my whole career. Many people call me the goat!', 
  imgSource: 'to be entered' 
  },
  {
  name: 'cristiano ronaldo' , 
  description: 'I am one of the best right now. I come from Portugal and have won the champions league 5 times.', 
  imgSource: 'to be entered' 
  },
  {
  name: 'kylian mbappe' , 
  description: 'I am a young french footballer with some serious pace. I share a record with Pele in being the youngest to score in a world cup final', 
  imgSource: 'to be entered' 
  },
  {
  name: 'neymar jr' , 
  description: 'I come from the land of samba football. After some success at Barcelona, I have been playing in the french league. ', 
  imgSource: 'to be entered' 
  }
];
//var bailoutCard = footballersData[].imgSource;

var clearInstruction = function(){
  instruction.innerHTML = "";
}

var display = function( data ){
  var displayElement = document.querySelector('#output');
  displayElement.innerHTML = "";
  output.innerText = data;
  };

document.querySelector('#input').addEventListener('change', function(event){
  var currentInput = event.target.value;

  if (gameState === 0) {

    var newInstruction = initiate(currentInput);
    console.log(newInstruction);
    var instruction = document.getElementById("instruction");
    var newItem = document.createElement('a');
    newItem.textContent = newInstruction;
    instruction.appendChild(newItem);

  }
  else if (gameState === 1) {
    clearInstruction();
    attemptNumber = 0;
    attemptsLeft = 4;
    var newQuestion = generateQueston();
    var question = document.getElementById("question");
    var newItem = document.createElement('a');
    newItem.textContent = newQuestion;
    question.appendChild(newItem);


  }
  else if (gameState === 2){
    var result = inputHappened(currentInput);
    display(result);
    }
  });   

//console.log(footballersData);

var initiate = function(currentInput) {
  var name = currentInput;
  gameState ++;
  yourName.innerHTML ="";
  return "Hello \n" + name + " Are you ready to test your football knowledge?" + " You are to guess the name of a famous footballer based on the hints provided. You have 3 chances to guess the letter. Fret not, you are also given 3 bailout cards which will show you a photo of the player. (Delete the contents of the input bar and enter to proceed!"

}
var generateUserAnswer =function (foundIndex) {
      //userAnswer.length = secretWord.length;
      userAnswer.push = secretWord [foundIndex];
      userAnswerString = userAnswer.join(" ");
      console.log(userAnswerString);

      //var answerSoFar = document.getElementById("answerSoFar");
      //var newItem = document.createElement('a');
      //newItem.textContent = userAnswerString;
      //answerSoFar.appendChild(newItem);

      //function strReplace(){
        //var newStr = userAnswerString.replace(/,/g, "_");
        
        // Insert modified string in paragraph
        //document.getElementById("user-answer").innerHTML = newStr;
      //}
}


var generateQueston = function() {
  //later change the 3 to .length
  var randomIndex = Math.floor(Math.random()*6);
  console.log(randomIndex);
  secretWord = footballersData[randomIndex].name.split("");
  console.log(secretWord);
  gameState ++;
  //userAnswer.length = secretWord.length;
  console.log(footballersData[randomIndex].description);

  return footballersData[randomIndex].description;
}


var checkWithInput = function(currentInput) {
  
  var i = 0;
  while (i < secretWord.length) {
    if (secretWord[i] === currentInput) {
       answer = true;
       score = score + 2;
       guessedLetters.push(currentInput);
       secretWord.splice(i,1);
    }
  i = i + 1;
  }
  return answer;
 // for (var i = 0; i < secretWord.length; i++){
   // if (secretWord[i] === currentInput) {
     //  answer = true;
       //guessedLetters.push(currentInput);
       
      //for (var j = i + 1; j < secretWord.length; j++) {
        //if (secretWord[j] === currentInput) {
        //moreThanOneLetter ++;
        //guessedLetters.push(currentInput);
      //}
      //}
    //return answer; 
    //}
    //answer = false;
    return answer;
  }
  
  


var inputHappened = function(currentInput) {
  
  if (checkWithInput(currentInput) === false){
    if (attemptsLeft === 0) {
      return "Game Over";
    }
    else {
      attemptNumber++;
      attemptsLeft = (attemptsLeft - attemptNumber);
      console.log(attemptsLeft);
      return "you guessed wrong, you have " + attemptsLeft + " tries left " + " Your progress: " + guessedLetters;
    }
  }
  else if (secretWord.length === 0) {
    gameState = 1;
    // clear up the question element
    question.innerHTML = "";
    guessedLetters = [];
    return "Well done, you got it! Your next question is..."
  }
  else {
    return "You guessed right! Guess the next letter \n" +  " Your progress: \n" + guessedLetters + "\n Attempts Left: " +attemptsLeft + "\n Your Score:" + score;

  }
}

