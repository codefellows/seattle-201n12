'use strict';
// next step: make function to make... store objects, likely an array that stores all the.... stores.
// other next step: use document.getElementbyId() to put all this information into sales.html instead of the <table> in there.

/*
ALL THE STORE OBJECT LITERALS

var pikePlace = {
  name:'Pike Place Market Store',
  minCust:23,
  maxCust:65,
  avgCook:6.3,
};

var seaTac = {
  name:'SeaTac Airport Store',
  minCust:3,
  maxCust:24,
  avgCook:1.2,
};

var seattleCenter = {
  name:'Seattle Center Store',
  minCust:11,
  maxCust:38,
  avgCook:3.7,
};

var alki = {
  name:'Alki Store',
  minCust:2,
  maxCust:16,
  avgCook:4.6,
};

var cookStores = [pikePlace,seaTac,seattleCenter,alki];
*/

//Store constructor function
var Store = function(name, minCust, maxCust, avgCook, cookSold){
  this.name = name; //name of store
  this.minCust = minCust; //minimum customers per hour
  this.maxCust = maxCust; //maximum customers per hour
  this.avgCook = avgCook; //# of average cookies sold per customer
  this.cookSold = []; //# of cookies sold at this store per hour
};


Store.prototype.calcCustPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  return Math.round((randomAmount) * this.avgCookPerSale);
};

Store.prototype.calcCookSold = function(){ //calculating cookies sold per hour
  for(var i = 0; i < 15; i++){
    /* other students did this.hoursOpen to calculate how many hours/day store was open */
    this.cookSold.push(this.calcCustPerHour());
  }
};

Store.prototype.renderHours = function(){
  this.calcCookSold();

  var storesContainer = document.getElementById('stores');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  headerEl.className = 'blue';
  console.log(headerEl);
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul'); //create an element
  console.log(this.cookSold);

  for(var i in this.cookSold){ //give ul content
  /* same as for(var i = 0; i < this.cookSold.length; i++) */
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookSold[i];
    ulEl.appendChild(listItemEl);

  }

  // append the ul
  storesContainer.appendChild(ulEl);
};

// function that renders all the stores
var renderAllStores = function(){
  seaTac.renderHours();
};

//Store.renderHours();
//console.log(Store.calcCustPerHour());

var seaTac = new Store('SeaTac Airport Store',1,50,2,[20,10,5]);
console.log(seaTac);

Store.prototype.renderAsTableRow = function () {
  //calculate the data we need
  this.calcCookSold();

  //Step 1. Reference a container element
  var storeTableEl = document.getElementById('cookTable');
  
  //Step 2. Make a new table row (tr) element

  var trEl = document.createElement('tr');

  //Step 3. Give element content, a table row takes in table headers, and table data as content


  //Give table row a table header element
  var thEl = document.creatElement('th'); //table header
  thEl.textContent = this.name;
  trEl.appendChiled(thEl); //append table header to row

  //Give the table row table data about the min customers
  var tdEl = document.createElement('td');
  tdEl.textContent = this.minCust;
  trEl.appendChild(tdEl);

  //Give the table row a td about the max customers
  tdEl = document.createElement('td');
  tdEl.textContent = this.minCust;
  trEl.appendChild(tdEl);

  //Give the table row a td about the avg# of purchased cookies per customer
  tdEl = document.createElement('td');
  tdEl.textContent = this.avgCookPerSale;
  trEl.appendChild(tdEl);

  //Step Append the row we have been building to the table itself
  storeTableEl.appendChild(trEl);

};


//=================
//Function to render all our objects
//Good to put them in an array and just .push everything
var allSalCookStores = [];
//var pandamonium = new PandaStore('Pandamonium the Panda Emporium', 3, 12, .8, 15);
seaTac.renderHours();
//"allPandaStore.push(pandasRUs);"

/*"pandaSmart.renderAsTableRow(){"
  for(i = 0; i < )*/
