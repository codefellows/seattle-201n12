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

new Song('Purple Rain', 'purplerain');
new Song('Let\'s Work', 'letswork');
new Song('DMSR', 'dmsr');
new Song('Mountains', 'mountains');
new Song('Starfish and Coffee', 'starfish');

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
  var songList = document.getElementById('funky-list');
  songList.innerHTML = '';
  songList.hidden = false;
  songList.textContent = 'CLICK ON THIS LIST TO HIDE IT';
  for (var i = 0; i < allSongs.length; i++) {
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
  datasets: [{
    data: votes, // votes array we declared earlier
    backgroundColor: [
      'bisque',
      'darkgray',
      'burlywood',
      'lightblue',
      'navy'
    ],
    hoverBackgroundColor: [
      'purple',
      'purple',
      'purple',
      'purple',
      'purple'
    ]
  }]
};

function drawChart() {
  var ctx = document.getElementById('funky-chart').getContext('2d');

  songChart = new Chart(ctx, {
    type: 'scatter',
    data: data, //created above
    options: {
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
  document.getElementById('funky-chart').hidden = true;
}
// ++++++++++++++++++++++++++++++++++++++++++++
// EVENT LISTENERS
// ++++++++++++++++++++++++++++++++++++++++++++

document.getElementById('draw-chart').addEventListener('click', function() {
  drawChart();
  // setTimeout(hideChart, 5000);
});

document.getElementById('list-button').addEventListener('click', function() {
  showSongsAsList();
});

// document.getElementById('list-button').addEventListener('click', showSongsAsList);

document.getElementById('funky-list').addEventListener('click', function() {
  document.getElementById('funky-list').hidden = true;
});

document.getElementById('voting').addEventListener('click', function(event) {
  if (event.target.id !== 'voting') {
    tallyVote(event.target.id);
  };

  if (chartDrawn) {
    songChart.update();
  }
});