'use strict';

//global variables
var correctGuesses = 0;

// ask them their username

// var username;

// do{
//   username = prompt('what is your name?');
// } while(!username);

// alert('hello ' + username + ' welcome to my about me guessing game');
// console.log('username : ' + username);


// ask them if I like pandas

// var likesPandas;

// do{
//   likesPandas = prompt('do you like pandas?');
// } while(likesPandas !== 'yes' && likesPandas !== 'no');

// if(likesPandas === 'yes'){
//   alert('of course I do, they\'re awesome!');
//   //Three forms to increment by 1
//   // correctGuesses = correctGuesses + 1;
//   // correctGuesses += 1;
//   correctGuesses++;
// } else {
//   alert('How could you! they are awesome');
// }

// ask them if pandas like cupcakes

// var likesCupcakes;

// do {
//   likesCupcakes = prompt('Do Pandas like cupcakes?');
// } while (likesCupcakes !== 'yes' && likesCupcakes !== 'no');

// if (likesCupcakes === 'yes') {
//   alert('of course I do, but they prefer bamboo pie!');
//   //Three forms to increment by 1
//   // correctGuesses = correctGuesses + 1;
//   // correctGuesses += 1;
//   correctGuesses++;
// } else {
//   alert('You probably thought they only liked bamboo pie');
// }

// ask them a number question, give four guesses, responsive alerts
// guess a random number between 1 and 10;

// var min = Math.ceil(1);
// var max = Math.floor(10);
// var randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
// // random number from MDN docs
// console.log(randomNumber);

// var guessCounter = 4;
// var guessedNumber;

// do{
//   // guessedNumber = parseInt(prompt('pick a number 1 - 10'));
//   guessedNumber = prompt('pick a number 1 - 10');
//   guessedNumber = parseInt(guessedNumber);


//   console.log(guessedNumber, randomNumber, guessedNumber !== randomNumber);
//   guessCounter--;
// } while (guessedNumber !== randomNumber && guessCounter > 0);

// if(guessCounter === 0){
//   alert('you didn\'t get the correct answer, it was ' + randomNumber);
// } else {
//   alert('nice job');
//   correctGuesses++;
// }

// ask them a question with multiple right answers
// pandas fav fruit

var favoriteFruits = ['tangerines', 'durians', 'canteloupe', 'strawberries', 'dragons'];
var answeredCorrectly = false;
var guessCounter = 6;

do{
  var fruitAnswer = prompt('what are a pandas favorite fruits');

  for(var i = 0; i < favoriteFruits.length; i++){
    if(favoriteFruits[i] === fruitAnswer){
      answeredCorrectly = true;
      break;
    }
  }

  if(answeredCorrectly){
    alert(favoriteFruits[i]);
    alert('nice job, they like tangerines, durians, canteloupe, strawberries, and dragons');
    correctGuesses++;
  } else {
    alert('nice try, guess again');
  }
  guessCounter--;
}while(guessCounter > 0 && !answeredCorrectly);


if(!answeredCorrectly){
  alert('nice tries, they like tangerines, durians, canteloupe, strawberries, and dragons');
}

function area(width, height){
  var area = width * height;
  return [area,2];
}

area();