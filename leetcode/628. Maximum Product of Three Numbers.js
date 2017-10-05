/*
变量min1, min2存储最小元素，变量max1, max2, max3存储最大元素
*/
var maximumProduct = function(nums) {
  let ans = max1 = max2 = max3 = Number.MIN_SAFE_INTEGER;
  let min1 = min2 = Number.MAX_SAFE_INTEGER;

  for (n of nums) {
    if (n > max1) {
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (n > max2) {
      max3 = max2;
      max2 = n;
    } else if (n > max3) max3 = n;

    if (n < min1) {
      min2 = min1;
      min1 = n;
    } else if (n < min2) {
      min2 = n;
    }
  }
  
  return Math.max(ans, max1 * max2 * max3, max1 * min1 * min2);
};

let res = maximumProduct([1,2,3]);
console.log(res);