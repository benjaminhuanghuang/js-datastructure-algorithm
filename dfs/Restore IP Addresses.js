/*
93. Restore IP Addresses

Medium

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]


https://leetcode.com/problems/restore-ip-addresses/

*/

/*
  https://www.youtube.com/watch?v=pi-S2TLYuL4
  
  https://www.youtube.com/watch?v=61tN4YEdiTM&t=1003s&ab_channel=NeetCode

  time: O(3^4)=>O(1)  space: O(n)
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const dfs = (count, start, curr)=>
  {
    if (count > 4) {
      return;
    }
    if (count == 4 && start == s.length) {
      ans.push(curr);
      return;
    }

    for (let i = 1; i < 4; i++) {
      //  取 1位，2位，3位
      if (start + i > s.length) break;

      const tmp = s.substring(start, start + i);
      if ((tmp[0] == "0" && tmp.length > 1) || (i == 3 && Number.parseInt(tmp) >= 256)) continue;
      dfs(count + 1, start + i, curr + tmp + (count == 3 ? "" : "."));
    }
  }

  const ans = [];
  dfs(0, 0, "");
  return ans;
};
