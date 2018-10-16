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
var clickCount=  0; // counts total clicks on goats

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
    if(clickCount === 5){
      renderChart;
      console.log(clickCount);
    
      //remove the listener
      imageSection.removeEventListener('click', goatClickHandler);

    }

  }

};

imageSection.addEventListener('click', goatClickHandler);




new GoatImage('./images/sassy-goat.jpg', 'Sassy');
new GoatImage('./images/sweater-goat.jpg', 'Sweater Goat');
new GoatImage('./images/kissing-goat.jpg', 'Kissing Goat');
new GoatImage('./images/cruisin-goat.jpg', 'Cruisin Goat');
new GoatImage('./images/float-your-goat.jpg', 'Floater Goat');

// chartJS



// var ctx = document.getElementById('myChart').getContext('2d');
// console.log(ctx);




// function that renders the chart after 15 clicks
var renderChart = function() {


  var goatNames = [];
  for(var i in allGoatImages){
    goatNames.push(allGoatImages[i].name);
  }

  var goatLikes =[];
  for(var x in allGoatImages){
    goatLikes.push(allGoatImages[x].likes);
  }
  var chartData = {
    labels: goatNames,
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3], //array of values
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
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
    }
  };
  
  
  var barChart = {
    type: 'horizontalBar',
    data: chartData,
    options: chartOptions,
  };
  
  var myChart = new Chart(ctx, barChart);
};
