# Class 6: The DOM, Domain Modeling, and Introduction to Objects

<a id="top"></a>
## Lecture 6

## Today's Schedule
- Announcements
  - Review feedback from week 1 surveys
- Go over student surveys *[15 minutes]*
- Discuss upcoming Career Coaching assignments
- Code Review *[30 minutes]*
- [Go over the assigned readings](#readings) *[60 minutes]*
- Code demo *[75 minutes]*

## Learning Objectives

As a result of completing Lecture 6 of Code 201, students will:
- Be able to translate a real-world problem domain into a code model by using provided user stories and technical requirements, as measured by successful completion of the daily code assignment
- Demonstrate an understanding of how the browser represents an HTML document as an object that can be manipulated with JavaScript, as measured by successful completion of the daily code assignment and a quiz administered in Canvas.
- Use JavaScript to dynamically render array data as an unordered list in the DOM, as measured by successful completion of the daily code assignment
- Demonstrate an understanding of how object literals are structured in JavaScript, as well as how to access and reassign values/functionality to their properties and methods, as measured by successful completion of the daily code assignment and a quiz administered in Canvas.
- Demonstrate an understanding of how dot notation and bracket notation are used to access/reassign properties and methods in JavaScript objects, as measured by successful completion of the daily code assignment and a quiz administered in Canvas.

[-top-](#top)

## Readings

- ["Understanding The Problem Domain Is The Hardest Part Of Programming"](http://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming/) (Sonmez)
- JS Chapter 3: "Functions, Objects, and Methods" (pp.101-144)
- JS Chapter 5: "The Document Object Model"
- [Read about Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

[-top-](#top)

### Notes on the assigned readings

**Article on Domain Modeling (Sobol)**

- Domain modeling is the process of creating a conceptual model for a specific problem. And a domain model that's articulated well can verify and validate your understanding of that problem.
- Here's some tips to follow when building your own domain models:
  - When modeling a single entity that'll have many instances, build self-contained objects with the same attributes and behaviors.
  - Model its attributes with a constructor function that defines and initializes properties.
  - Model its behaviors with small methods that focus on doing one job well.
  - Create instances using the new keyword followed by a call to a constructor function.
  - Store the newly created object in a variable so you can access its properties and methods from outside.
  - Use the this variable within methods so you can access the object's properties and methods from inside.

**"Understanding The Problem Domain Is The Hardest Part Of Programming" (Sonmez)**

- Why problem domains are hard
- Programming is easy if you understand the problem domain

**JS Chapter 3: "Functions, Objects, and Methods" (pp.100-144)**

- p.101: Object literal notation
- p.102: Accessing an object and dot notation
- p.106: Creating an object: constructor notation (‘this’ is shown but not explained)
- p.107: Updating an object
- p.108-112: Creating many objects: constructor notation (‘this’ explained on p.108)
- p.118: Arrays are objects
- p.119: Arrays of objects & objects in arrays
- p.120: What are built-in objects?
- p.124: Window object
- p.126: Document object
- p.128: String object
- p.130: Working with strings (concatenation)
- p.132: Number object
- p.134: Math object

**JS Chapter 5: "The Document Object Model"**

- p.186: The DOM tree is a model of a web page (diagram on p.187)
- p.188: Overview working with the DOM tree (accessing elements, setting values, create, attributes)
- p.190: Caching DOM queries (i.e. variables)
- p.192: Accessing elements
- p.196: Nodelists: DOM queries that return more than one element
- p.208: Traversing the DOM
- p.212: How to get/update element content
- p.236: Examining the DOM in Chrome

[-top-](#top)
