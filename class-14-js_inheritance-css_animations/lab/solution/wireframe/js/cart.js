/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

function clearCart() {
  var tableRows = document.querySelectorAll('#cart tbody tr');

  for (var i = 0; i <= tableRows.length; i++) {
    if (tableRows[i]) {
      tableRows[i].remove();
    }
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // Find the table body
  var tableBody = document.querySelector('#cart tbody');

  // Iterate over the items in the cart
  for (var i in cart.items) {
    // Create a TR
    var tr = document.createElement('tr');

    // Create a TD for the delete link
    var xTD = document.createElement('td');
    xTD.textContent = 'x';
    xTD.classList.add('remover');
    xTD.id = i;

    // Create a TD for the quantity
    var qTD = document.createElement('td');
    qTD.textContent = cart.items[i].quantity;

    // Create a TD for the item name
    var iTD = document.createElement('td');
    iTD.textContent = cart.items[i].product;

    // Add the TR to the TBODY and each TD to the TR
    tableBody.appendChild(tr);
    tr.appendChild(xTD);
    tr.appendChild(qTD);
    tr.appendChild(iTD);
  }
}

function removeItemFromCart(event) {
  // Only do anything interesting if the clicked item was a delete button.
  if (event.target.classList.contains('remover')) {
    // Remove that item from the cart, based on the ID we set when we created the button.
    cart.removeItem(parseInt(event.target.id));
    // Save the cart back to local storage.
    cart.saveToLocalStorage();
    // Redraw the cart.
    renderCart();
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
