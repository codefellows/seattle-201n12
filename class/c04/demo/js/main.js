'use strict';

//global variables
var correctGuesses = 0;
var cute;

//helper function - usually left at top of code, because of their utility
var randomNumber = function() {
  var min = Math.ceil(1);
  var max = Math.floor(10);
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  // modification of getRandomInclusive from MDN docs
  return randomNumber;
}

// ask username
var userName = function();
{

do{
  userName = prompt('what name?');
} while(!userName);

alert('hello' + userName + 'welcome to this silly page.');
console.log('Username: ' + userName);
}

// ask the if they like quokkas

var likesQuokkaQuestion = function(){

  var quokkas;


do{
  quokkas = prompt('Do you like quokkas?');
} while(quokkas !== 'yes' && quokkas !=='no');

if(quokkas === 'yes'){
  alert('Of course you do, they\'re awesome!');
  // correctGuesses = correctGuesses + 1;
  // or correctGuesses++; or correctGuesses += 1;

} else {
  alert('How could you! They are awesome.');
}
}

////ask them if quokkas are the cutest
//do{
//  cute = prompt('Are quokkas the cutest?');
//} while(cute !== 'yes' && cute !=='no');
//
//if (cute === 'yes') {
//  alert('Yes they indeed are one of the cutest animals.');
//// insert correctGuesses ++ here
//} else {
//  alert('Well, you are wrong. :)');
//}
//
// ask them # question w/ 4 guesses, responsive alerts
// guess a random number between 1 and 10 w/Math.random() without the function

var new RandomNumber = randomNumber();
console.log(randomNumber);


var guessedNumber;
var guessedCounter = 4;

do{
  guessedNumber = parseInt(prompt('Pick a number between 1 and 10:'));
  console.log(guessedNumber, randomNumber, guessedCounter, guessedNumber !== randomNumber);
  guessedCounter--;
} while (guessedNumber !== randomNumber && guessedCounter > 0);

if (guessedCounter === 0){
  alert('I\'m sorry, but you did not get the correct answer. It was ' + randomNumber + '.');
} else {
  alert('Great job!');
  correctGuesses++;
}

// ask a question with multiple correct answers
// quokka's fav food

var favFoods = ['tangerines', 'durians', 'hummus','canteloupe', 'strawberries', 'jackfruit'];
var answerCorrect = false; //this check starts at false; the for loop will set to true if the user picks one of the correct answers
guessedCounter = 6;

do {
  var foodAnswer = prompt('What are quokka\'s favorite foods?');
  
  for(var i = 0; i < favFoods.length; i++) {
    if(favFoods[i] === foodAnswer){
      answerCorrect = true;
    }
  }

  if(answerCorrect){
    alert('Awesome! They like tangerines, durians, hummus, canteloupe, strawberries and jackfruit.');
    correctGuesses++;
  } else {
    alert('Nice try, guess again!');
  }
  guessedCounter--;
} while(guessedCounter > 0 && !answerCorrect);


if(!answerCorrect){
  alert('Too bad! They like tangerines, durians, hummus, canteloupe, strawberries and jackfruit.');
}

var array2 = [[1,2],[3,4]]

//========================
//function calls

userName();
quokkas();

