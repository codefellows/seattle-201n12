'use strict';

var busmalContainer = document.getElementById('busmal-container');
// Collect all document element references we need, inlcuding ctx for chartjs

// references to the current images on the page
//document.getElementById

// counter for all of our clicks
var clickCounter = 0;

var Image = function (parameters, values){
  //builds images
}

var allImages = []; // container for all images

var chooseNewImage(){
// choose 3 new random images that dont repeat from the current images or each other

//change the source of the 3 images on the page currently
}

var handleBusmalClick = function(event){
// check to make sure we click on the correct thing (image);

// increment the correct image's likes

// increment all current images appeared count

//call choose new image function ()

// increment the total clicks on the page

// test if we have clicked 25 times
  // shut the listener off
  // make chart appear

}

//instantiate all new images
// (new Image('cool.jpg))

busmalContainer.addEventListener('click', handleBusmalClick);

// ======================================
// Charts
// ======================================

//function to render the chart
var renderChart = function () {
  // chartjs needs ctx

  //=================
  
  //collect all data
  // we need labels, data values, colors, 

  // create a data object that gets passed all our other arrays, based off of the example from chartjs
  //============
  //call a new Chart and pass in ctx and our data
}