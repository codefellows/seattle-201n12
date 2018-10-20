'use strict';

//global vars
//Track what they will be clicking on/ what will have events tied to
var goatImageLeft = document.getElementById('left');
var goatImageRight = document.getElementById('right');
var imageSection = document.getElementById('click-me');
var leftGoatText = document.getElementById('goat-1-text');
var rightGoatText = document.getElementById('goat-2-text');
var currentLeftGoatImageArrayIndex = 0;
var currentRightGoatImageArrayIndex = 4;

//===============
var allGoatImages = [];

//Constructor : Goat images
var GoatImage = function(src, name){
  this.src = src;

  this.likes = 0;
  this.appeared = 0;

  this.name = name;

  allGoatImages.push(this);
}

//prototypes

GoatImage.prototype.renderGoat = function (){
  goatImageLeft.src = this.src;
};

//event listeners and handlers
var goatClickHandler = function (event) {
  //when i Get the event back, make sure I clicked on an image
  if(event.target.id === 'left' || event.target.id === 'right'){
    
    //Selects a single random number that isnt the last image shown on the screen
    do {
      var randomNumberLeft = Math.floor(Math.random() * allGoatImages.length)
    } while (randomNumberLeft === currentLeftGoatImageArrayIndex || randomNumberLeft === currentRightGoatImageArrayIndex);

    do {
      var randomNumberRight = Math.floor(Math.random() * allGoatImages.length)
    } while (randomNumberRight === currentLeftGoatImageArrayIndex || randomNumberRight === randomNumberLeft || randomNumberRight === currentRightGoatImageArrayIndex);

    //incrementing the goat that was clicked on's likes and appearance count
    if(event.target.id === 'left'){
      allGoatImages[currentLeftGoatImageArrayIndex].likes++;
      console.log('left was clicked');
    } else {
      allGoatImages[currentRightGoatImageArrayIndex].likes++;
    }

    // both images appeared on the screen, only one was clicked on, but we increment that both appeared
    allGoatImages[currentLeftGoatImageArrayIndex].appeared++;
    allGoatImages[currentRightGoatImageArrayIndex].appeared++;

    //persisting the currently displayed goat as a global variable
    currentLeftGoatImageArrayIndex = randomNumberLeft;
    currentRightGoatImageArrayIndex = randomNumberRight;

    // event.target.src = allGoatImages[randomNumber].src
    goatImageLeft.src = allGoatImages[randomNumberLeft].src;
    goatImageRight.src = allGoatImages[randomNumberRight].src;
    leftGoatText.textContent = allGoatImages[randomNumberLeft].name;
    rightGoatText.textContent = allGoatImages[randomNumberRight].name;

  }
  
}

imageSection.addEventListener('click', goatClickHandler)




new GoatImage('./images/sassy-goat.jpg', 'Sassy');
new GoatImage('./images/sweater-goat.jpg', 'Sweater Goat');
new GoatImage('./images/kissing-goat.jpg', 'Kissing Goat');
new GoatImage('./images/cruisin-goat.jpg', 'Cruisin Goat');
new GoatImage('./images/float-your-goat.jpg', 'Floater Goat');


// var goatClickHandler = function (eventObject) {
//   do {
//     var randomNumber = Math.floor(Math.random() * allGoatImages.length)
//   } while (randomNumber === currentLeftGoatImageArrayIndex);

//   allGoatImages[currentLeftGoatImageArrayIndex].likes++;
//   allGoatImages[currentLeftGoatImageArrayIndex].appeared++;

//   currentLeftGoatImageArrayIndex = randomNumber;
//   eventObject.target.src = allGoatImages[randomNumber].src
// }



// new GoatImage('./images/cruisin-goat.jpg', 'cruising goat', '400px');
// new GoatImage('./images/float-your-goat.jpg', 'float goat');
// new GoatImage('./images/kissing-goat.jpg', 'kissing goat');
// new GoatImage('./images/sassy-goat.jpg', 'sassy goat');
// new GoatImage('./images/sweater-goat.jpg', 'sweater goat');

// GoatImage.renderTwoRandomly();

