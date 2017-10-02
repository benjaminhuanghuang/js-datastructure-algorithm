// Set
let keyRows = [];
keyRows.push(new Set(['q','w','e','r','t','y','u','i','o','p']));
keyRows.size

// Char <-> int
let char = String.fromCharCode(n % 26 + "A".charCodeAt(0));

// Copy array
let newArray = [...oldArray];

// Sum Array
var sum = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 0);

// Max in array
let maxValue = Math.max(...oldArray);

//
// people[0] is height, people[1] is number
// sort by height by desc and number by asc
people.sort((a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  } else {
    return b[0] - a[0];
  }
});

// Insert into array
result.splice(people[i][1], 0, people[i]);

// Getting a random number between 0 (inclusive) and 1 (exclusive)
Math.random();

// [min, max)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

// Regex
  let re = /^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$/;
  let re2 = new RegExp('^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$');
  var myArray = str.match(re);
