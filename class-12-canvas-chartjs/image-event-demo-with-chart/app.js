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
var  clickCount = 0; // tracking total clicks on goats

var ctx = document.getElementById("myChart").getContext('2d');
console.log(ctx);

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


    clickCount++;
    if (clickCount === 5) { //switch that tells us we have clicked 15 times
      renderChart();

      //remove the listener
      imageSection.removeEventListener('click', goatClickHandler)

    }

  }
  
}

imageSection.addEventListener('click', goatClickHandler)




new GoatImage('./images/sassy-goat.jpg', 'Sassy');
new GoatImage('./images/sweater-goat.jpg', 'Sweater Goat');
new GoatImage('./images/kissing-goat.jpg', 'Kissing Goat');
new GoatImage('./images/cruisin-goat.jpg', 'Cruisin Goat');
new GoatImage('./images/float-your-goat.jpg', 'Floater Goat');


// ===================================================
// Chart Js
// ===================================================



var renderChart = function () {

  var goatNames = [];
  var goatLikes = [];
  var colors = [];
  for (var i in allGoatImages) { //does one pass over all goat images, and collects their name, likes and gives them a background color
    goatNames.push(allGoatImages[i].name);
    goatLikes.push(allGoatImages[i].likes);
    colors.push('red');

  }

  console.log(goatLikes);

  var chartData = {
    labels: goatNames, // #Labels for individual rows of data
    datasets: [{ //takes in more than one set of data
      label: '# of Votes', // #Need to label your chart
      data: goatLikes, //#array of values
      backgroundColor: colors,
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    animation: {
      duration: 800,
      easing: 'easeInCirc',
    },
    responsive: true,
  }

  var barChart = {
    type: 'horizontalBar', //refers to the type of chart
    data: chartData, // #insert actual array of chart Data
    options: chartOptions, // insert the default options
  }

  //render the chart
  var myChart = new Chart(ctx, barChart);
}