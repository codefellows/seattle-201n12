'use strict';


function randQuestion() {
  var i = 2; //setup for while loops
  var favorite1 = Math.floor((Math.random() * 666) + 1);
  console.log(favorite1);

  while (i >= 0) {
    var question6 = 'guess my favorite integer between 1 and 666. You have ';
    var guessedNumber = parseInt(prompt(question6 + i + ' tries left'));
    console.log('guessed number is ' + guessedNumber);
    console.log('tries left ' + (i - 1));
    i--;
    if (guessedNumber === NaN) {
      alert('Try guessing an integer between 1 and 666');
      i++;
    } else if (guessedNumber === favorite1) {
      alert('great job, you are such a good guesser!!! ' + favorite1 + ' was my favorite number!');
      break;
    } else if (i === 0) {
      break;
    } else if (guessedNumber > favorite1) {
      alert('too high, guess again.');
    } else if (guessedNumber < favorite1) {
      alert('too low, guess again.');
    }
  }

  if (i === 0) {
    alert('you failed, but that is ok. We are going to try again; I will make it easier with 3 guesses. However, I have changed my mind about my favorite integer');
    var favorite2 = Math.floor((Math.random() * 666) + 1);
    console.log(favorite2);
    i = 3;
    while (i >= 0) {
      var question7 = 'You are still guessing my favorite integer between 1 and 666. You have ';
      guessedNumber = parseInt(prompt(question7 + i + ' tries left'));
      console.log('guessed number is ' + guessedNumber);
      console.log('tries left ' + (i - 1));
      i--;
      if (guessedNumber === NaN) {
        alert('Try guessing an integer between 1 and 666');
        i++;
      } else if (guessedNumber === favorite2) {
        alert('great job, you turned out to be a decent guesser after all!! ' + favorite2 + ' was my favorite number!');
        break;
      } else if (i === 0) {
        break;
      } else if (guessedNumber > favorite2) {
        alert('too high, guess again.');
      } else if (guessedNumber < favorite2) {
        alert('too low, guess again.');
      }
    }
  }

  if (i === 0) {
    alert('you failed again? Maybe you are not as awesome as they say. I will give you one more chance to redeem yourself. This time I am really handicapping you. You get 666 guesses and I have a new favorite number.');
    var favorite3 = Math.floor((Math.random() * 666) + 1);
    console.log(favorite3);
    i = 3;
    while (i >= 0) {
      var question8 = 'Lets do this, show me your skills and guess. You have ';
      guessedNumber = parseInt(prompt(question8 + (i + 663) + ' tries left'));
      console.log('guessed number is ' + guessedNumber);
      console.log('tries left ' + (i + 663 - 1));
      i--;
      if (guessedNumber === NaN) {
        alert('Try guessing an integer between 1 and 666');
        i++;
      } else if (guessedNumber === favorite3) {
        alert('great job, you turned out to be a decent guesser after all!! ' + favorite2 + ' was my favorite number!');
        break;
      } else if (i === 0) {
        alert('this is no fun anymore, maybe you should just look at the rest of my webpage');
        break;
      } else if (guessedNumber > favorite1) {
        alert('too high, guess again.');
      } else if (guessedNumber < favorite1) {
        alert('too low, guess again.');
      }
    }
  }
}
randQuestion();
function foodQuestion() {
  var i = 5;
  while (i >= 0) {
    var fA = ['pizza', 'peach cobbler', 'shepherd\'s pie', 'ice cream', 'milk shake', 'caterpillar roll', 'sushi', 'salmon', 'chinese food', 'chow mein'];
    var foodQuestion = 'I have a few favorite foods. What do you think one of them is? you have ';
    var foodGuessRaw = prompt(foodQuestion + i + ' guesses left');
    var foodGuess = foodGuessRaw.toLowerCase();
    i--;
    if (fA.indexOf(foodGuess, 0) >= 0) {
      //if(fA.includes(foodGuess)){ //also same
      alert('congrats, you guessed right. Specifically, my favorites are ' + fA.join(', ') + '.');
      break;
    } else if (i == 0) {
      alert('I like some of those, but I really love ' + fA.join(', ') + ' a lot more');
      break;
    }
  }
}
foodQuestion();