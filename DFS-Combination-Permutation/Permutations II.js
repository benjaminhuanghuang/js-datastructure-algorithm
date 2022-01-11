/*

47. Permutations II

https://leetcode.com/problems/permutations-ii/

might contain duplicates

*/

/*
  DFS Backtracking, use hashmap count the nubmer
  https://www.youtube.com/watch?v=qhBVWf0YafA&ab_channel=NeetCode

*/
var permuteUnique = function (nums) {
  const ans = [];
  const counter = {};
  for (const n of nums) {
    counter[n] = (counter[n] || 0) + 1;
  }
    
  const dfs = (curr) => {
    if (curr.length == nums.length) {
      ans.push([...curr]);
      return;
    }

    for (const n of Object.keys(counter)) {
      if(counter[n]> 0){
        curr.push(n);
        counter[n]--;
         console.log(counter) 
        dfs(curr);
        curr.pop();
        counter[n]++;
      }
    }
  };
  dfs([]);

  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = [];
  // 和#46 的不同
  nums.sort((a, b) => a - b);
  const used = new Array(nums.length).fill(0);

  const dfs = (curr) => {
    if (curr.length == nums.length) {
      ans.push([...curr]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      //和46的不同 Same number can be only used once at each depth.
      if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;

      if (used[i]) continue;

      curr.push(nums[i]);
      used[i] = 1;
      dfs(curr);
      curr.pop();
      used[i] = 0;
    }
  };
  dfs([]);

  return ans;
};
