/*
496. Next Greater Element I
*/

var nextGreaterElement = function(findNums, nums) {
  let res = [];
  for (let i = 0; i < findNums.length; i++) {
    let bigger = findNums[i];
    let indexInNums = nums.indexOf(findNums[i]);
    for (let j = indexInNums + 1; j < nums.length; j++) {
      if (findNums[i] < nums[j]) {
        bigger = nums[j];
        break;
      }
    }
    if (bigger > findNums[i]) res.push(bigger);
    else res.push(-1);
  }
  return res;
};

let res = nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
console.log(res);
