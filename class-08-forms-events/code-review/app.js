'use strict';

//Constructor for all stores

var PandaStore = function(name, minCustomersperHour, maxCustomersPerHour, averagePandasSoldPerCustomer, hoursOpenPerDay){
  this.name = name;
  this.min = minCustomersperHour;
  this.max = maxCustomersPerHour;
  this.avgPandasPerSale = averagePandasSoldPerCustomer;
  this.pandasSoldEachHour = [];
  this.hoursOpen = hoursOpenPerDay;
};


// Add details to my global variables

PandaStore.prototype.calculatePandasSoldPerHour = function() { // output is a single hour's pandas sold
  var customersPerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(customersPerHour * this.avgPandasPerSale);
};

PandaStore.prototype.calculatePandasSoldEachHour = function () { // output is filling the pandas sold each hour array  with data for each hour
  for (var i = 0; i < this.hoursOpen; i++) {
    this.pandasSoldEachHour.push(this.calculatePandasSoldPerHour());
  }
};

PandaStore.prototype.renderStoreHours = function () {
  if(!this.pandasSoldEachHour.length){ //make sure we are not doubling the data in the array
    this.calculatePandasSoldEachHour(); //we call this here to populate our pandas sold each our array
  }

  //Step 1. Reference a container element
  var pandaStoreContainer = document.getElementById('stores');

  // Step 2. Make a new element
  var headerEl = document.createElement('h2');

  //Step 3. Give element content
  headerEl.textContent = this.name;

  //Step 4 Append the newly created element to the container element
  pandaStoreContainer.appendChild(headerEl);

  // We start Step 2. Again, but here we have created a ul, which is a container element that needs other elements as its content
  var ulEl = document.createElement('ul'); //create an element

  // Step 3. Give our ul content
  for (var i in this.pandasSoldEachHour) {
    //  create a li
    var listItemEl = document.createElement('li');

    //give the li content from our pandas sold each hour array
    listItemEl.textContent = this.pandasSoldEachHour[i];

    //Step 4. Append the li to our ul element
    ulEl.appendChild(listItemEl);
  }

  //Step 4. append the ul to our container element
  pandaStoreContainer.appendChild(ulEl);
};

PandaStore.prototype.renderAsTableRow = function () {
  //Calculate the data we need
  this.calculatePandasSoldEachHour();

  //Step 1. Reference a container element
  var pandaTableEl = document.getElementById('panda-table');
  // Step 2. Make a new table row (tr) element
  var trEl = document.createElement('tr');
  console.log(trEl);
  //Step 3. Give element content, a table row takes in table headers, and table data as content


  //Give the Table row a table header element.
  var thEl = document.createElement('th'); //table header
  thEl.textContent = this.name;
  trEl.appendChild(thEl); // append the table header to the row

  // give the Table Row table data about the min customers
  var tdEl = document.createElement('td');
  tdEl.textContent = this.min;
  trEl.appendChild(tdEl);


  //give the Table Row a td about the max customers
  tdEl = document.createElement('td');
  tdEl.textContent = this.max;
  trEl.appendChild(tdEl);

  //give the Table Row a td about the average purchased pandas per customers
  tdEl = document.createElement('td');
  tdEl.textContent = this.avgPandasPerSale;
  trEl.appendChild(tdEl);

  //Step Append the row we have been building to the table itself
  pandaTableEl.appendChild(trEl);
};


//

// =======================================
// Declare our new objects
// =======================================
var allPandaStores = [];
var pandasRUs = new PandaStore('Pandas R Us', 3, 12, .8, 15);
var pandaSmart = new PandaStore('Pandas Smart', 1, 17, .3, 15);
var bearsNBeets = new PandaStore('Bears Beats BSG', 7, 20, 1.2, 15);
var pandamonium = new PandaStore('Pandamonium the Panda Emporium', 3, 12, .8, 15);
allPandaStores.push(pandasRUs);
allPandaStores.push(pandaSmart);
allPandaStores.push(pandamonium);
allPandaStores.push(bearsNBeets);
// =======================================
// A function to render all our objects
// =======================================

var renderAllPandaStores = function () {
  pandasRUs.renderStoreHours();
  pandaSmart.renderStoreHours();
  pandamonium.renderStoreHours();
  bearsNBeets.renderStoreHours();
};

var renderAllPandaStoresAsTableRows = function () {
  for(var i in allPandaStores){
    allPandaStores[i].renderAsTableRow();
  }
};

renderAllPandaStoresAsTableRows();

// renderAllPandaStores();

