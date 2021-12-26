//----------------------------------------------------------
// 1D
//----------------------------------------------------------
const visit = new Array(numCourses).fill(0);

// Create new array from an existing one
let numbers2 = Array.from(numbers);

let evens = Array.from(numbers, (x) => x % 2 == 0);

// from set
Array.from(new Set(loop(array)));

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]

//----------------------------------------------------------
// 2D array
//----------------------------------------------------------

// Array.from() method creates a new array instance from the specified array and optionally map each
// array element to a new value.
const graph = Array.from(Array(5), () => []);

var arr = Array.from({ length: 3 }, () => Array.from({ length: 4 }, () => val));

var arr = Array.from(Array(R), () => Array(C).fill(val)); // BEST one

// use map
const board = new Array(n).fill(0).map((_) => Array(n).fill("."));

// Sort
let ordered = [...arr].sort((a, b) => a - b);



/*
    Merge array
*/
const mergeArrays = (arrays) => [].concat(...arrays);

// use reduce
const mergeArrays2 = (arrays) => {
  return arrays.reduce((acc, n) => acc.concat(n));
};

const input = [[1, 2, 3], [4, 5], [6]];
console.log(mergeArrays(input));
console.log(mergeArrays2(input));

/*
Sum
*/
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, i) => acc + i);

console.log(sum);
const sum2 = nums.reduce((acc, i) => acc + i, 0);
console.log(sum2);

// Copy array
let newArray = [...nums];

// Max in array
let maxValue = Math.max(...nums);
console.log(maxValue);

// Equal
function arrayEquals(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
}
