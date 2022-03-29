//----------------------------------------------------------
// 1D
//----------------------------------------------------------
const visit = new Array(numCourses).fill(0);

// Create new array from an existing one
let numbers2 = Array.from(numbers);

let evens = Array.from(numbers, (x) => x % 2 == 0);

// from set
Array.from(new Set(loop(array)));

//----------------------------------------------------------
// build Graph
//----------------------------------------------------------
const edges_r =  Array(n).fill(0).map((a)=>new Set());

//不能使用下面的代码，下面的代码生成的array 每个元素都指向同一个引用
const WRONG =  Array(n).fill(new Set())
//不能使用下面的代码，下面的代码生成的array元素为undefined
const WRONG =  Array(n).map((a)=>new Set());


// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]

//----------------------------------------------------------
// 2D array
//----------------------------------------------------------

// Array.from() method creates a new array instance from the specified array and optionally map each
// array element to a new value.
const graph = Array.from(Array(5), () => []);

var arr = Array.from({ length: 3 }, () => Array.from({ length: 4 }, () => val));

var arr = Array.from(Array(R), () => Array(C).fill(val)); // BEST one

// 这样写会导致错误，fill()会使用同一个reference，导致所有的节点相同
const graph_WRONG = new Array(n).fill([]);
// 要写成
const graph = new Array(n).fill(0).map((i)=>[]);

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

/*
如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
*/

var  arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
}, 0) // set init value
console.log(arr, sum);


// Copy array
let newArray = [...nums];

// Max in array
let maxValue = Math.max(...nums);
console.log(maxValue);

// Equal
function arrayEquals(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
}

// count the number
const count = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
