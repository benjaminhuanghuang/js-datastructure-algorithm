/*
636. Exclusive Time of Functions

Level: Medium

https://leetcode.com/problems/exclusive-time-of-functions

Log format {function_id}:{"start" | "end"}:{timestamp}

*/

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  // exe time for functions
  const ans = new Array(n).fill(0);
  const s = [];
  let prev=0;

  for (const log of logs) {
    const [fid, action, curr ] = log.split(":");
    const currTime = parseInt(curr);
    if (action[0] == "s") {
      if (s.length > 0) {
        // record the exe time of previous function
        ans[s[s.length - 1]] += currTime - prev;
      }
      s.push(fid);
      prev = currTime;
    } else {
      // finish current function
      ans[s[s.length - 1]] += currTime - prev + 1;
      s.pop();
      prev = currTime + 1;
    }
  }
  return ans;
};
