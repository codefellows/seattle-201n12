'use strict';

var ctx = document.getElementById("myChart").getContext('2d');
console.log(ctx);

var chartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{ //takes in more than one set of data
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
  },
  responsive: true,
}

var barChart = {
  type: 'horizontalBar', //refers to the type of chart
  data: chartData,
  options: chartOptions,
}

var myChart = new Chart(ctx, barChart);