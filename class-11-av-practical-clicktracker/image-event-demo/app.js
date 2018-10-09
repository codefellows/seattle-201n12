'use strict';

//global vars
var goatImage1 = document.getElementById('goat1');
var goatImage2 = document.getElementById('goat2');
var imageSection = document.getElementById('click-me');


//===============

GoatImage.goatArray = [];

function GoatImage (src, name, size) {
  this.src = src;
  this.name = name;
  this.size = size;
  if(!size){
    this.size = '300px';
  }
  this.likesCount = 0;
  this.displayedCount = 0;

  GoatImage.goatArray.push(this);
}


GoatImage.prototype.loveThem = function () {
  console.log(true);
  return true;
};

// GoatImage.prototype.render = function () {
//   console.log('rendering');
// };

GoatImage.rankGoats = function (){
  for(var i in this.goatArray){
    console.log(this.goatArray[i].likesCount);
  }
};

var pastSelection1 = 0;
var pastSelection2 = 4;

GoatImage.renderTwoRandomly = function () {
  do {
    var randomNumber1 = Math.floor(Math.random() * GoatImage.goatArray.length);
  } while(randomNumber1 == pastSelection1 || randomNumber1 == pastSelection2);

  do {
    var randomNumber2 = Math.floor(Math.random() * GoatImage.goatArray.length);
  } while (randomNumber2 === randomNumber1 || randomNumber2 === pastSelection1 || randomNumber2 === pastSelection2);

  goatImage1.src = GoatImage.goatArray[randomNumber1].src;
  goatImage2.src = GoatImage.goatArray[randomNumber2].src;

  goatImage1.dataset.index = randomNumber1;
  goatImage2.dataset.index = randomNumber2;

  pastSelection1 = randomNumber1;
  pastSelection2 = randomNumber2;
};

// event listener
imageSection.addEventListener('click', imageClickHandler);

function imageClickHandler(event) {
  console.log(event.target.dataset.index);
  GoatImage.goatArray[event.target.dataset.index].likesCount++;

  GoatImage.renderTwoRandomly();
}


// ================

new GoatImage('./images/cruisin-goat.jpg', 'cruising goat', '400px');
new GoatImage('./images/float-your-goat.jpg', 'float goat');
new GoatImage('./images/kissing-goat.jpg', 'kissing goat');
new GoatImage('./images/sassy-goat.jpg', 'sassy goat');
new GoatImage('./images/sweater-goat.jpg', 'sweater goat');

GoatImage.renderTwoRandomly();