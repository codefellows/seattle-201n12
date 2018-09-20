'use strict';

var emptyObject = {};

var oneLineObject = {a : 1, b : 2, 3: 'data', 4: 'nicholas'};

var genericObject = {
  key: 'value',
  key2: 'value2',
  'I am a multi word key': 1234,
  method: function(){
    console.log(this);
  },
  logMultiWordKey: function(){
    console.log(this['I am a multi word key']);
  }
};



// ===================================
//DOM Manipulation
//===================================

//1. reference a containing element - document.getElementById()
//2. Create a new element - document.createElement()
//3. Give that element content - element.textContent
//4. append that element to the containing element parentElement.appendChild(newChildElement)

// Function to change the DOM



// var changeH1 = function(){
//   var h1El = document.getElementById('panda-title');

//   h1El.textContent = 'Pandas and Monkeys';
// };

// changeH1();

// Function to create an item in the DOM

// var ceramicsInventory = ['pots', 'vases', 'pans'];

// with vars and set data;

// var createStore = function () {
//   var storeContainer = document.getElementById('panda-stores');

//   //create an element
//   var h2El = document.createElement('h2');
//   h2El.textContent = 'Ceramics Store';

//   // append to the containing element
//   storeContainer.appendChild(h2El);

//   //logic to add all the inventory we are selling
//   var ulEl = document.createElement('ul');

//   for(var i = 0; i < 3; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = ceramicsInventory[i];
//     ulEl.appendChild(liEl);
//   }

//   storeContainer.appendChild(ulEl);
// };
var ceramicStore = {
  name: 'Fresh Pots of Bel-Air',
  inventory: ['pots', 'vases', 'pans'],
  visitors: Math.floor(Math.random() * 100)
};

var iceCreamStore = {
  name: 'Ice Cream all the Time',
  inventory: ['vanilla', 'coconut', 'banana', 'chicken and waffles'],
  visitors: 99
};

var pandaStoreAndMonkeysToo = {
  name: 'Pandas and Monkeys',
  inventory: ['puppies', 'bananas', 'bamboo', 'footwear (fancy)'],
  visitors: 99
};

var storeArray = [ceramicStore, iceCreamStore, pandaStoreAndMonkeysToo];


var createStoreWithAnObject = function (storeObject) {
  var storeContainer = document.getElementById('panda-stores');

  //create an element
  var h2El = document.createElement('h2');
  h2El.textContent = storeObject.name;

  // append to the containing element
  storeContainer.appendChild(h2El);

  //logic to add all the inventory we are selling
  var ulEl = document.createElement('ul');

  for (var i = 0; i < storeObject.inventory.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = storeObject.inventory[i];
    ulEl.appendChild(liEl);
  }

  storeContainer.appendChild(ulEl);
};

for(var i = 0; i < storeArray.length; i++){
  createStoreWithAnObject(storeArray[i]);
}

var ceramicStoreWithMethod = {
  name: 'Fresh Pots of Bel-Air',
  inventory: ['pots', 'vases', 'pans'],
  visitors: Math.floor(Math.random() * 100)
};


// Adding a method with dot notation

ceramicStoreWithMethod.renderStore = function () {
  var storeContainer = document.getElementById('panda-stores');

  //create an element
  var h2El = document.createElement('h2');
  h2El.textContent = this.name;

  // append to the containing element
  storeContainer.appendChild(h2El);

  //logic to add all the inventory we are selling
  var ulEl = document.createElement('ul');

  for (var i = 0; i < this.inventory.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = this.inventory[i];
    ulEl.appendChild(liEl);
  }

  storeContainer.appendChild(ulEl);
};






// console.log(pandaStoreAndMonkeysToo);

// accessing with dot notation
// console.log(pandaStoreAndMonkeysToo.inventory);

//accessing with bracket notation
// console.log(pandaStoreAndMonkeysToo['inventory']);

