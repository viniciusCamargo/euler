// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var numbers = [];

// // populate the array
for (var i = 0; i < 999; ++i) {
  numbers[i] = i + 1;
}

// // test if it is multiple of 3 or 5
function findMultiples(num) {
  return num % 3 == 0 || num % 5 == 0;
}

// // apply the test
var multiples = numbers.filter(findMultiples);

// // sum the values of an array
function add(runningTotal, currentValue) {
  return runningTotal + currentValue;
}

// // apply the add function
var sum = multiples.reduce(add);

console.log(sum); // 233168

////////////////////////////////////////////////////////////

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.