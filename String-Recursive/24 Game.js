/*
679. 24 Game

  using the operators ['+', '-', '*', '/'] and the parentheses '(' and ')' to get the value 24.

 Hard

https://leetcode.com/problems/24-game

# 241. Different Ways to Add Parentheses

*/

/*
  DFS

  https://www.youtube.com/watch?v=7zlzniZ5xWs&ab_channel=HuifengGuan

  最终状态是 两个部分运算
  4个数字要排列组合
  对于C++ ， java要把numbers 转化成double
*/
/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
  const compute = (x, y) => {
    const result = [x + y, x - y, y - x, x * y];
    if (x != 0) result.push(y / x);
    if (y != 0) result.push(x / y);
    return result;
  };

  const helper = (nums) => {
    if (nums.length == 1) return Math.abs(nums[0] - 24) < 0.0001;

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        // 对任意两个数做运算，把结果和剩下的两个数字放进 newNums
        const newNums = new Array();
        // 把剩下的两个数字放进newNums
        for (let k = 0; k < nums.length; k++) {
          if (k != i && k != j) {
            newNums.push(nums[k]);
          }
        }
        // 对 nums[i], nums[j] 运算
        for (const result of compute(nums[i], nums[j])) {
          console.log([...newNums, result]);
          if (helper([...newNums, result])) return true;
        }
      }
    }

    return false;
  };

  return helper(cards);
};
