/*
679. 24 Game

 Hard

https://leetcode.com/problems/24-game

# 241. Different Ways to Add Parentheses

*/

/*
  https://www.youtube.com/watch?v=7zlzniZ5xWs&ab_channel=HuifengGuan
  最终状态是 两个部分运算
  4个数字要排列组合
  对于C++ ， java要把numbers 转化成double
*/
/**
 * @param {number[]} cards
 * @return {boolean}
 */
 var judgePoint24 = function(cards) {

  void helper(nums, eps, res)
  {
    if (nums.length == 1)
    {
      return (Math.abs(nums[0] - 24) < eps)
    }
    for (let i = 0; i < nums.length; ++i)
    {
      for (let j = i+1; j <nums.length; ++j)
      { 
        const p = nums[i], q = nums[j];
        const t = [p + q, p - q, q - p, p * q];
        if (p > eps)
          t.push_back(q / p);
        if (q > eps)
          t.push_back(p / q);
        nums.erase(nums.begin() + i);
        nums.erase(nums.begin() + j);
        for (double d : t)
        {
          nums.push_back(d);
          helper(nums, eps, res);
          nums.pop_back();
        }
        nums.insert(nums.begin() + j, q);
        nums.insert(nums.begin() + i, p);
      }
    }
  }
  let res = false;
  helper(arr, eps, res);
  return res;  
};