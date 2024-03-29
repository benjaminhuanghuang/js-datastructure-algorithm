/*
    Repeat the process
        1. slice 
        2. merge the result of the sort result

    Time co

*/
function mergeSort(nums) {
  if (arr.length < 2) return arr;

  var middle = Math.floor(arr.length / 2);
  // begin to end (end not included).
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());

  while (right.length) result.push(right.shift());

  return result;
}
