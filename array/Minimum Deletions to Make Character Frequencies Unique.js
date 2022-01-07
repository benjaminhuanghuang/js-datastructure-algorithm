/*
1647. Minimum Deletions to Make Character Frequencies Unique

https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
*/

/**
 * @param {string} s
 * @return {number}
 */
 var minDeletions = function(s) {
  const counter = new Array(26).fill(0);

for (const c of s) {
  counter[c.charCodeAt(0) - "a".charCodeAt(0)]++;
}
// big...small
counter.sort((a, b) => b - a);

let max_freq = counter[0];
let ans = 0;
for (const count of counter) {
  if (count > max_freq) {
    if (max_freq > 0) {
      // try to change current count ot max_freq
      ans += count - max_freq;
    } else {
      ans += count;
    }
  }
  // 每次 max_freq -1, 因为本次循环会用掉当前max_freq
  max_freq = Math.min(max_freq - 1, count - 1);
}
return ans;
};
