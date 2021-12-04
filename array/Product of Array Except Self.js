/*
238. Product of Array Except Self

https://leetcode.com/problems/product-of-array-except-self/
*/

/*
https://www.youtube.com/watch?v=tSRFtR3pv74

    首先想到的思路是计算全部数字的乘积，然后分别除以num数组中的每一个数（需要排除数字0）。然而，题目要求不能使用除法。
     由于output[i] = (x 0 * x 1 * ... * x[i-1] ) * (x[i+1] * .... * x[n-1] )

    因此执行两趟循环：

    第一趟正向遍历数组，计算x 0 ~ x i-1 的乘积

    第二趟反向遍历数组，计算x i+1 ~ x n-1 的乘积
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;

  const left_products = new Array(n).fill(1);
  const right_products = new Array(n).fill(1);
  const ans = new Array(n).fill(1);

  for (let i = 1; i < n; ++i) {
    left_products = nums[i - 1] * left_products[i - 1];
  }

  for (let i = n - 2; i >= 0; --i) {
    right_products = nums[i + 1] * right_products[i + 1];
  }

  for (let i = 0; i < n; ++i) {
    ans[i] = left_products[i] * right_products[i];
  }

  return ans;
};

var productExceptSelf = function (nums) {
  const n = nums.length;

  const ans = new Array(n).fill(1);

  for (let i = 1; i < n; ++i) {
    ans[i] = nums[i - 1] * ans[i - 1];
  }

  let r = 1;
  for (let i = n - 1; i >= 0; --i) {
    ans[i] = ans[i] * r;
    r *= nums[i];
  }
  return ans;
};
