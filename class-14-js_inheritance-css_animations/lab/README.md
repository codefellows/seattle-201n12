# Assignment Overview: Lab 14

## Create an Order Form and a Shopping Cart

The focus group results have been collected and the BusMall catalog is ready to be released! The results were so positive that the marketing team would also like to make these products available for online purchase. Your new task is to create an order form page and a shopping cart page.

The marketing team wants the site to go live in a few hours. To give you an idea of what they are looking for, the team has added some `TODO` tasks throughout the JavaScript files. They do not have any preferences for styling, so use your best judgment when filling in the `style.css` file. However, they refuse to budge on the structure of the website and have asked that you *DO NOT* modify the HTML files in any way.

**You will notice a few new things as you go through this exercise:**
1. There are multiple .js files
1. `cart.js` is used on the cart page and `catalog.js` is used on the page with the form
1. The `app.js` file carries some global variables that the others will reference and is loaded into both pages
1. You will encounter and need to deal with a new type of form element
1. You will need to reference elements without IDs

This is a pair programming lab. One person from the pair will fork the lab repo which will contain all of the files necessary to complete the project.
Add the other person as a collborator. That means that both of you will have privileges to push and merge to that repo.

Fill in the necessary code in the JavaScript and CSS files, but **do not modify the HTML files in any way**.

Your `index.html` is an order form for customers: it will have an order form for BusMall that contains the following features:

  1. A dropdown menu of all BusMall products (`<select>` and `<option>` will be needed).
  1. An input of `type="number"` to indicate the quantity to purchase.
  1. An "Add to Cart" button to submit the order. When the order is submitted, all of the input fields should be cleared.
  1. An animated confirmation message using CSS and JS, displayed when the order is submitted, plus a link to the shopping cart page.
  1. Appropriate instructions and styling on the page.

  Your `cart.html` page will display the BusMall orders on a typical shopping cart checkout page.

  1. It should display all items currently in the order with a picture of the item.
  1. Each order should have a button "Delete this item" that will remove that order from the DOM (and array of ordered items) when it is clicked.
  1. Text inputs for name, street, city, state, ZIP code, and phone number.
  1. An input of `type="number"` to enter a 16-digit credit card number.
  1. A "Process Order" button to submit the order. When the order is submitted, all of the input fields should be cleared.
  1. An animated confirmation message using CSS and JS.


## Process

There's nothing really new here, just extensions and adaptations of previous things we have done. Here's some things to think about as you go plan out the lab for today:

1. You'll need to use local storage to share data between the two HTML pages.
1. The constructor from BusMall might be handy as a way to organize your products.
1. You and your partner should plan out how you want to collaboratively attack the problem with regards to pair programming. It's up to you how the details are managed, but make sure each partner makes contributions in both CSS and JS files.

### *Remember to submit a link to your last pull request on Canvas!*
