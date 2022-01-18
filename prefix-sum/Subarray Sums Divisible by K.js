/*
974. Subarray Sums Divisible by K


https://leetcode.com/problems/subarray-sums-divisible-by-k/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraysDivByK = function(nums, k) {
  const c = new Array(k);
  c[0] = 1;
  let ans = 0;
  let sum = 0;
  for (const a of nums)
  {
    sum = (sum + a % k + k) % k;
    ans += c[sum]++;
  }
  return ans;
};
/*
 统计 p[i] % k 出现的次数
*/
var subarraysDivByK = function(nums, k) {
  const c = new Array(k);
  c[0] = 1;
  let ans = 0;
  let sum = 0;
  for (const a of nums)
  {
    sum = (sum + a % k + k) % k;
    ans += c[sum]++;
  }
  return ans;
};