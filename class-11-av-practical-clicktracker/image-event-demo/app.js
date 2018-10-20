'use strict';

//global vars
//Track what they will be clicking on/ what will have events tied to
var goatImageLeft = document.getElementById('left');
var goatImageRight = document.getElementById('right');
var imageSection = document.getElementById('click-me');
var goatImageLeftArrayIndex = 0;

//===============
var allGoatImages = [];

//Constructor : Goat images
var GoatImage = function(src, name){
  this.likes = 0;
  this.src = src;
  this.name = name;
  this.appeared = 0;

  allGoatImages.push(this);
}

//prototypes

GoatImage.prototype.renderGoat = function (){
  goatImageLeft.src = this.src;
};

//event listeners and handlers
var goatClickHandler = function (eventObject) {
  do {
    var randomNumber = Math.floor(Math.random() * allGoatImages.length)
  } while(randomNumber === goatImageLeftArrayIndex);

  allGoatImages[goatImageLeftArrayIndex].likes++;
  allGoatImages[goatImageLeftArrayIndex].appeared++;

  goatImageLeftArrayIndex = randomNumber;
  eventObject.target.src = allGoatImages[randomNumber].src
}

goatImageLeft.addEventListener('click', goatClickHandler)




new GoatImage('./images/sassy-goat.jpg', 'Sassy');
new GoatImage('./images/sweater-goat.jpg', 'Sweater Goat');
new GoatImage('./images/kissing-goat.jpg', 'Sweater Goat');





//store images: goatImageArray

// GoatImage constructor
// Tracking likes: start at 0 and increment when clicked
// images themselves (src)
// text
// size
// how many times it appeared
// store its index??

// user wants to click
// event listener
// tie the listener to the section

// page needs to change
// !!1. change image itself 
// --2. change the description
// !! 3. prevent them from repeating
// 4. increment the clicked on goat's likes
// Stretch- check goats for appearing
// Stretch- give user feedback after 52 goats && 18
// ================

// new GoatImage('./images/cruisin-goat.jpg', 'cruising goat', '400px');
// new GoatImage('./images/float-your-goat.jpg', 'float goat');
// new GoatImage('./images/kissing-goat.jpg', 'kissing goat');
// new GoatImage('./images/sassy-goat.jpg', 'sassy goat');
// new GoatImage('./images/sweater-goat.jpg', 'sweater goat');

// GoatImage.renderTwoRandomly();

