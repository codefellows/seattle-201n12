'use strict';

//global variables
var allImages = []; //container for all images

var busmalContainer = document.getElementById('busmal-container');
//collect all document element references we need, including ctx for chart

//references all current images on the page
//document.getElementbyId

//clickCounter

var Image = function (parameters, values){
  //builds images
};

var chooseNewImage = function(){
  //choose 3 new random images that don't repeat from teh current images or each other

  //change the source of the 3 images on teh page currently
};

var handleBusmalClick = function(event){
//checks to make sure clicks get assigned to the correct images

//increment right image's likes

//increment all current images appeared count

//call choose new image function

//increment total clicks on the page
//test if we have clicked 25 times
  //shut off the listener (maybe make a different element appear)
  //make chart appear
//choose images
};

//instantiate all new images
// coolnewimage.jpg

busmalContainer.addEventListener('click', handleBusmalClick);

/* ===================================
Charts
====================================*/

//chart renderer
var renderChart = function () {
  //chartjs needs ctx

  //======collect all chart data =============
  // labels, data values, colors

  //create a data object that gets pass all our other arrays, based off of the example from chartjs
  //STRETCHES: allowing a button to have user continue clicking, or update the chart concurrently with these more clicks

  //call a new Chart and pass in ctx and our data
};
