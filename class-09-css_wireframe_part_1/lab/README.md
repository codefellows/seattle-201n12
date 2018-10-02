# Assignment Overview: Lab 9

Continue working on the functionality of your **sales.html** page if you do not have it working 100% yet, including the row of totals across the bottom.

Here's your other tasks for today:

- Style up the public facing page (**index.html**) to make it appealing to customers. NOTE: You **must** use all of the images in the adjacent asset directory. Your client insists that you use Every. Single. One.
- Your public-facing **index.html** page should have all of the things you'd expect such a page to have for such a business: locations with addresses, hours open, contact information, and so us. Just do mockups of these things since this is not a real business, of course.
- You can also mock up references (either links or little sections on the **index.html** page) for things like About Us (company history and mission), Merchandise (sales of t-shirts, mugs, stickers, etc.), links to salmon events like the Salmon Days in Issaquah, etc.

- Apply a similar style to the **sales.html** page.

	### Stretch Goals (Not required! Do any one of them, as many as you want, or none)

- Add the ability for your users to choose among multiple display or color profiles for the page. Clicking a button should allow them to choose (for instance) whether the text is dark on a light background, or the text is light on a dark background. You can also experiment with changing up the style: make a version of your display that mimics a newspaper, or an Excel spreadsheet, or Roman chiseling in stone. (But make sure the user can choose a more normal style, too!) You can also experiment with using a `select` input to choose the style.

- Give your input form functionality to update the data for a location that is already in the table. This is going to require some additional pieces, such as:
	- Some kind of `if` statement to test whether the inputted cookie stand location name matches one that is already in the table (or other mechanism to indicate which location to update)
	- The new input numbers need to be run through the calculation methods as with the original creation of the instances

- Make a style guide, using [this one that a team Brian was on made for Everlast](http://everlast.com/style-guide) as a model.

- Make two additional pages:
	- Mock up an order form that would be public facing (**store.html**) so that visitors to the website can order salmon cookies and swag. That form would need to receive all of the things you'd expect on an order form: name, address, payment info, products to order, quantities, special instructions, and so on.
	- A second 'private' page (**order-processing.html**) that shows a list of pending orders and the individual order details. The business owner can then process the orders by clicking a button next to the order that then moves that list item to a 'Filled Orders' list at the bottom of the page.
