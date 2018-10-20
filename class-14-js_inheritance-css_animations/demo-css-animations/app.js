'use strict';

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');

document.getElementById('button1').addEventListener('click', function() {
  console.log('Toggled the transformation of the first 3 paragraphs');
  one.classList.toggle('notransform');
  two.classList.toggle('notransform');
  three.classList.toggle('notransform');
});

document.getElementById('button2').addEventListener('click', function() {
  console.log('Toggled the wiggling first paragraph on animations');
  four.classList.toggle('wiggle');
});

document.getElementById('button3').addEventListener('click', function() {
  console.log('Toggled the growing and shrinking Demi');
  five.classList.toggle('grow');
});

document.getElementById('button4').addEventListener('click', function() {
  console.log('Toggled the spinning dog');
  six.classList.toggle('spin');
});