'use strict';
// ++++++++++++++++++++++++++++++++++++++++++++
// DATA - Variable declarations
// ++++++++++++++++++++++++++++++++++++++++++++

var allSongs = [];
var songChart;
var chartDrawn = false;

// ++++++++++++++++++++++++++++++++++++++++++++
// DATA - Constructor and instances
// ++++++++++++++++++++++++++++++++++++++++++++

function Song(title, identifier) {
  this.title = title;
  this.votes = 0;
  this.identifier = identifier;
  allSongs.push(this);
}

new Song('American Girl', 'american');
new Song('Mary Jane\'s Last Dance', 'maryjane');
new Song('Wildflowers', 'wildflowers');
new Song ('Refugee', 'refugee');
new Song('Free Fallin\'', 'freefallin');

// Arrays to hold data for the chart
var votes = [];
var titles = [];

// ++++++++++++++++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS
// ++++++++++++++++++++++++++++++++++++++++++++

function updateChartArrays() {
  for (var i = 0; i < allSongs.length; i++) {
    titles[i] = allSongs[i].title;
    votes[i] = allSongs[i].votes;
  }
}

function showSongsAsList() {
  var songList = document.getElementById('mellow-list');
  songList.innerHTML = '';
  songList.hidden = false;
  songList.textContent = 'CLICK ON THIS LIST TO HIDE IT';
  for (var i = 0; i < allSongs.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = allSongs[i].title + ', ' + allSongs[i].votes + ' votes';
    songList.appendChild(liEl);
  };
};

function tallyVote(thisSong) {
  for (var i = 0; i < allSongs.length; i++) {
    if (thisSong === allSongs[i].identifier) {
      allSongs[i].votes++;
      updateChartArrays();
    }
  }
}

// ++++++++++++++++++++++++++++++++++++++++++++
// CHART STUFF
// Charts rendered using Chart JS v.2.6.0
// http://www.chartjs.org/
// ++++++++++++++++++++++++++++++++++++++++++++

var data = {
  labels: titles, // titles array we declared earlier
  datasets: [
    {
      data: votes, // votes array we declared earlier
      backgroundColor: [
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy'
      ],
      hoverBackgroundColor: [
        'darkgreen',
        'darkgreen',
        'darkgreen',
        'darkgreen',
        'darkgreen'
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('mellow-chart').getContext('2d');
  songChart = new Chart(ctx,{
    type: 'polarArea',
    data: data,
    options: {
      legend: {
        labels: {
          fontColor: 'darkgreen',
          fontSize: 18
        }
      },
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}

function hideChart() {
  document.getElementById('mellow-chart').hidden = true;
}
// ++++++++++++++++++++++++++++++++++++++++++++
// EVENT LISTENERS
// ++++++++++++++++++++++++++++++++++++++++++++

document.getElementById('draw-chart').addEventListener('click', function(){
  drawChart();
  // setTimeout(hideChart, 5000);
});

document.getElementById('list-button').addEventListener('click', function(){
  showSongsAsList();
});

// document.getElementById('list-button').addEventListener('click', showSongsAsList);

document.getElementById('mellow-list').addEventListener('click', function(){
  document.getElementById('mellow-list').hidden = true;
});

document.getElementById('voting').addEventListener('click', function(event){
  if (event.target.id !== 'voting') {
    tallyVote(event.target.id);
  };

  if (chartDrawn) {
    songChart.update();
  }
});
