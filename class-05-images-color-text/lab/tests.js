'use strict';

// You should not modify anything in this file, but feel free to look through it!

function testSum() { //eslint-disable-line
  if (sum(4,7)[0] === 11 && sum(4,7)[1] === 'The sum of 4 and 7 is 11.') {
    console.log('%c TEST FOR sum() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sum() FAILS', 'color: red');
  }
}

function testMultiply() { //eslint-disable-line
  if (multiply(5,9)[0] === 45 && multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    console.log('%c TEST FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiply() FAILS', 'color: red');
  }
}

function testSumAndMultiply() { //eslint-disable-line
  if (sumAndMultiply(4, 7, 5)[0] === 16 && sumAndMultiply(4, 7, 5)[1] === 140 && sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    console.log('%c TEST FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumAndMultiply() FAILS', 'color: red');
  }
}

function testSumArray() { //eslint-disable-line
  if (sumArray(testArray)[0] === 9 && sumArray(testArray)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    console.log('%c TEST FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumArray() FAILS', 'color: red');
  }
}

function testMultiplyArray() { //eslint-disable-line
  if (multiplyArray(testArray)[0] === 24 && multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
    console.log('%c TEST FOR multiplyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray() FAILS', 'color: red');
  }
}

function testMultiplyAnyArray() { //eslint-disable-line
  if (multiplyAnyArray(testDynamicArray)[0] === 120 && multiplyAnyArray(testDynamicArray)[1] === 'The numbers 1,2,3,4,5 have a product of 120.') {
    console.log('%c TEST FOR multiplyAnyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyAnyArray() FAILS', 'color: red');
  }
}
