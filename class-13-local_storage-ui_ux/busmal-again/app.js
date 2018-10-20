'use strict';

var allImages = [];
var allImageSrcs = ['./assets/bag.jpg', './assets/banana.jpg', './assets/bathroom.jpg', './assets/boots.jpg',
  './assets/breakfast.jpg', './assets/bubblegum.jpg'];
var imageContainer = document.getElementById('images');

var BusmallImage = function (name, src, likes, appeared, size){
  this.name = name;
  this.src = src;
  this.likes = likes;
  this.appeared = appeared;
  this.size = size;

  allImages.push(this);
}

BusmallImage.prototype.renderSingleImage = function() {
  // take the necessary details and put it on the page
  //container element to reference<
  // new element
  var newImageEl = document.createElement('img');
  // give content
  newImageEl.src = this.src;
  newImageEl.style.width = this.size;
  // append it
  imageContainer.appendChild(newImageEl);
}


var renderImages = function (numberOfImagesToShow) {
  //display 'numberOfImagesToShow' images to the page
  for(var i = 0; i < numberOfImagesToShow; i++){

  // pick a random image
    allImages[i].renderSingleImage();

  }
  //add the images to the page
}

var makeAllImageObjects = function (){
  for(var i in allImageSrcs){
    var nameString = allImageSrcs[i].slice(9);
    new BusmallImage(nameString, allImageSrcs[i], 0, 0, '300px');  
  }
}

var renderChart = function(){

}

var handleClick = function(event){
  //check to make sure we are clicking on an image
  if(totalClicks > 25){
    renderChart();
  }
}

var initialize = function () {
  makeAllImageObjects();
  renderImages(3);
  imageContainer.addEventListener('click', handleClick);
  // start anything that needs starting in order
}

initialize();
