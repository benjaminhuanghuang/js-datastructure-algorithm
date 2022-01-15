/*
229. Majority Element II

Medium

https://leetcode.com/problems/majority-element-ii/

*/

/*
Solution: Boyer–Moore Voting Algorithm
Time complexity: O(n)
Space complexity: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let n1 = 0;
  let c1 = 0;

  let n2 = 1;
  let c2 = 0;

  for (const num of nums) {
    if (num == n1) {
      ++c1;
    } else if (num == n2) {
      ++c2;
    } else if (c1 == 0) {
      n1 = num;
      c1 = 1;
    } else if (c2 == 0) {
      n2 = num;
      c2 = 1;
    } else {
      --c1;
      --c2;
    }
  }

  c1 = c2 = 0;
  for (const num of nums) {
    if (num == n1) ++c1;
    else if (num == n2) ++c2;
  }

  const c = nums.length / 3;
  const ans = [];
  if (c1 > c) ans.push_back(n1);
  if (c2 > c) ans.push_back(n2);
  return ans;
};
