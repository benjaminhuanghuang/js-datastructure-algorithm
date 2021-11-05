/*
  queue 
*/

const first = arr.shift();
arr.push(1);

/*
  Stack 
*/

arr.push();
const e = arr.push(1);


/*
    Merge array
*/
const mergeArrays = (arrays) => [].concat(...arrays);


// use reduce
const mergeArrays2 = (arrays) => {
    return arrays.reduce((acc, n)=> acc.concat(n));
}

const input = [[1, 2, 3], [4, 5], [6]]
console.log(mergeArrays(input));
console.log(mergeArrays2(input));

/*
Sum
*/
const nums = [1,2,3,4];
const sum = nums.reduce((acc, i)=> acc + i);

console.log(sum)
const sum2 = nums.reduce((acc, i)=> acc + i,0);
console.log(sum2)


// Copy array
let newArray = [...nums];

// Max in array
let maxValue = Math.max(...nums);
console.log(maxValue)


// 2D array
const graph = Array.from(Array(numCourses), () => []);
