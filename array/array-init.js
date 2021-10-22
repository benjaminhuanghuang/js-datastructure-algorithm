/*-------------------------------------------------
    Create Array
------------------------------------------------*/
// Declare and instantiate a new array
var daysOfWeek = new Array();

// Specify the length of array
var daysOfWeek = new Array(7);

var daysOfWeek = new Array("Sunday", "Monday", "Tuesday", "Wednes day", "Thursday", "Friday", "Saturday");

// Best practice
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Create new array from an existing one
let numbers2 = Array.from(numbers);

let evens = Array.from(numbers, (x) => x % 2 == 0);

// Create array from the arguments, same as let numbers3 = [1]
let numbers3 = Array.of(1);
let numbers4 = Array.of(1, 2, 3, 4, 5, 6);

/*-------------------------------------------------
    fill / init array
-------------------------------------------------*/
let numbersCopy = Array.of(1, 2, 3, 4, 5, 6);
numbersCopy.fill(0); // [0,0,0,0,0,0]
numbersCopy.fill(2, 1); // fill value starting from position 1, [0,2,2,2,2,2]
numbersCopy.fill(1, 3, 5); // fill value starting from position 3 to 5 (not inclusive), [0,2,2,1,1,2]
let ones = Array(6).fill(1); // [1,1,1,1,1,1]

// Get length of array
console.log(daysOfWeek.length);

// Access elements
for (var i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for (var i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}



//-- Insert values at the start of the array
// The unshift() method adds one or more elements to the beginning of an array and
//    returns the new length of the array.
numbers.unshift(-2);
numbers.unshift(-4, -3); // -4, -1 , original array

//-- Remove element
// Remove element from the end of an array
numbers.pop();
// Remove eleemnt for the beginning of the array
numbers.shift();

//-- Add or remove elements from a specific position
numbers.splice(5, 3); //Remove 3 elements, starting from index 5
numbers.splice(5, 0, 2, 3, 4); //Don't remove element, insert 2, 3, 4 at index 5

//-- Join arrays
var zero = 0;
var positiveNumbers = [1, 2, 3];
var negativeNumbers = [-3, -2, -1];
var numbers = negativeNumbers.concat(zero, positiveNumbers);

//-- For loop & forEach
for (let n of numbers) {
  console.log(n % 2 == 0 ? "even" : "odd");
}

numbers.forEach(function (x) {
  console.log(x % 2 == 0);
});
numbers.forEach((x) => {
  console.log(x % 2 == 0);
});

//-- Iterating
var isEven = function (x) {
  // returns true if x is a multiple of 2.
  console.log(x);
  return x % 2 == 0 ? true : false;
};
numbers.every(isEven); // iterates the array until the retrun of funciton is false
numbers.some(isEven); // iterates the array until the retrun of funciton is true

var myMap = numbers.map(isEven); // return bool values

var evenNumbers = numbers.filter(isEven); //return elements that the function returned true

// The reduce method receives a function with parameters: previousVal, currentVal, index, array
numbers.reduce(function (previous, current, index) {
  return previous + current;
});

copyArray = [1, 2, 3, 4, 5, 6];
// Copy element at position 3, 4 to position starting at 1
copyArray.copyWithin(1, 3, 5); //[1,4,5,4,5,6]


//-- Search
// indexOf returns the index of the first element matches the argumant passed
console.log(numbers.indexOf(10));
// lastIndexOf returns the index of the last element matches the argumant passed
console.log(numbers.lastIndexOf(10));

//-- Array to string
console.log(numbers.toString()); // "1, 2, 3"
var numbersString = numbers.join("-");
console.log(numbersString);
