/*
763. Partition Labels

Level: Medium

https://leetcode.com/problems/partition-labels

把字符串分割成尽量多的不重叠子串，输出子串的长度数组。要求相同字符只能出现在一个子串中
*/



/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
  const last_index = new Array(26).fill(0);
  // 找出last index
  for (let i = 0; i < s.length; ++i)
    last_index[s.charCodeAt(i) % 26] = i;

  const ans=[];
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; ++i) {
    // 找出子串中字符的最大位置
    end = Math.max(end, last_index[s.charCodeAt(i) % 26]);
    if (i == end) {
      ans.push(end - start + 1);
      start = end + 1;
    }
  }
  return ans;
};