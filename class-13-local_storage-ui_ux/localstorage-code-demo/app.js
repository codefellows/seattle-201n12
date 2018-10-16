'use strict';

var iceCreamButton = document.getElementById('increment');
var sessionClicks = 0;
var chartEl = document.getElementById('ice-cream-chart')

// Constrcutor Function
function IceCream(flavor){
  this.flavor = flavor;
  this.scoopsServedPerDay = 0;
  IceCream.all.push(this);
}

if(!localStorage.getItem('tempIceCream')){ // if no local storage, build new Ice Cream
  IceCream.all = [];

  new IceCream('vanilla');
  new IceCream('coffee');
  new IceCream('mint Chip');
  new IceCream('bubble gum');
  new IceCream('moose tracks');
  new IceCream('strawberry');
  new IceCream('cookie dough');

} else { // if local storage, grab that data and use it
  IceCream.all = JSON.parse(localStorage.getItem('tempIceCream'));
// }

if(localStorage.getItem('sessionClicks')){//if they are in the middle of a session, grab their click amount
  sessionClicks = JSON.parse(localStorage.getItem('sessionClicks'));
}



// Chart stuff

var ctx = document.getElementById('ice-cream-chart').getContext('2d');

var iceCreamData = {
  labels: [],
  datasets: [{
    label: 'Favorite Ice Creams',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [],
  }]
};

function generateIceCreamData () { // this is the function to generate ice cream data
  for(var i in IceCream.all){
    _generateIceCreamData(i); //it applies logic using a helper function of the same name with an added _
    //you can find this function right below
  }
}

function _generateIceCreamData(i) {
  iceCreamData.labels[i] = IceCream.all[i].flavor;
  iceCreamData.datasets['0']['data'][i] = IceCream.all[i].scoopsServedPerDay;
}




var iceCreamChart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: iceCreamData,

  // Configuration options go here
  options: {}
});
chartEl.style.width='700px';

// Button Logic

iceCreamButton.addEventListener('click', iceCreamButtonHandler);

function iceCreamButtonHandler(){
  var randomIceCreamIndex = Math.floor(Math.random() * IceCream.all.length); //picks a random index

  IceCream.all[randomIceCreamIndex].scoopsServedPerDay++; //increments that index's value by one

  generateIceCreamData();
  iceCreamChart.update();
  updateTempIceCreamCollection();

  //Deals with tracking clicks and updating single source of truth ice cream collection
  sessionClicks++;
  if(sessionClicks === 10){
    updateIceCreamMain();
    chartEl.style.width = '700px';
    console.log('you did good and picked some ice cream');
    sessionClicks = 0;
  }


  localStorage.setItem('sessionClicks', sessionClicks); //updating clicks each time in local storage

}
//
generateIceCreamData();

// LocalStorage Section

//update the total clicks and temporary IceCream.all on each click

function updateTempIceCreamCollection () {
  localStorage.setItem('tempIceCream', JSON.stringify(IceCream.all));
}


//update the BigDaddy IceCream.all on 10 clicks

function updateIceCreamMain () {
  localStorage.setItem('permIceCream', JSON.stringify(IceCream.all));
}