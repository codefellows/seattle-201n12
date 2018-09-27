'use strict';

var pikePlace = {
  name: 'First and Pike',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
};

//Constructor for all stores

var Store = function(name, minCustomersperHour, maxCustomersPerHour, averageCookiesSoldPerCustomer){
  this.name = name;
  this.min = minCustomersperHour;
  this.max = maxCustomersPerHour;
  this.avgCookiesPerSale = averageCookiesSoldPerCustomer;
  this.cookiesSoldEachHour = [];
};

Store.prototype.calculateCustomersPerHour = function() {
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(randomAmount * this.avgCookiesPerSale);
};

var seaTac = new Store('SeaTac', 30, 35, 3.14);
console.log(seaTac);

pikePlace.calculateCustomersPerHour = function(){

};

pikePlace.calculateCookiesSoldEachHour = function(){
  console.log(this);
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

pikePlace.renderHours = function(){
  this.calculateCookiesSoldEachHour();

  var storesContainer = document.getElementById('stores');
  // console.log(storesContainer);
  var headerEl = document.createElement('h2');
  // console.log(headerEl);
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul'); //create an element
  console.log(this.cookiesSoldEachHour);

  for(var i in this.cookiesSoldEachHour){ // give ul content
    // same as
    //for(var i = 0; i < this.cookiesSoldEachHour.length; i++)
    var listItemEl = document.createElement('li');

    // console.log(listItemEl);
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }

  //append the ul
  storesContainer.appendChild(ulEl);
};
pikePlace.renderHours();
// pikePlace.calculateCookiesSoldEachHour();