'use strict';

var pikePlace = {
  name: 'First and Pike',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
};

pikePlace.calculateCustomersPerHour = function(){ //better to do this way instead of a var, and having a separate function
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round((randomAmount) * this.avgCookiesPerSale);
};

pikePlace.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){ //other students did this.hoursOpen to calculate how many hours/day the store was open
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

pikePlace.renderHours = function(){
  this.calculateCookiesSoldEachHour();
  
  var storesContainer = document.getElementById('stores');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  headerEl.className = 'blue';
  console.log(headerEl);
  headerEl.textContent = this.name; 
  //it's encouraged to use textContent instead of innerHTML for security reasons
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul'); // create an element
  console.log(this.cookiesSoldEachHour);
  
  for(var i in this.cookiesSoldEachHour){ // give ul content
    /* same as
    for(var i = 0; i < this.cookiesSoldEachHour.length; i++) */

    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }

  // append the ul
  storesContainer.appendChild(ulEl);
};

pikePlace.renderHours();
console.log(pikePlace.calculateCustomersPerHour());

//constructor format
var Store = function(name, min, max, avgCook, cookSold){ 
  this.name = name; //name of store
  this.min = min; //minimum customers per hour
  this.max = max; //max customers per hour
  this.avgCook = avgCook; //# of average cookies sold per customer
  this.cookSold = []; //# of cookies sold at this store this hour
}

var seaTac = new Store('SeaTac Airport Store',1,50,2,[20,10,5]);
console.log(seaTac);