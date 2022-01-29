/*

140. Word Break II

https://leetcode.com/problems/word-break-ii/

add space to string

*/

/*

http://zxi.mytechroad.com/blog/leetcode/leetcode-140-word-break-ii/
Time complexity: O(2^n)

Space complexity: O(2^n)

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const mem = new Map(); // s-> ans for s

  // append(["aaa bbb"], "ccc") get ["aaa ccc", "bbb ccc"]
  const append = (leftAnwsers, right) => {
    const results = [];
    for (const ans of leftAnwsers) {
      results.push(ans + " " + right);
    }
    return results;
  };

  const findAnswer = (s) => {
    if (mem.has(s)) return mem.get(s);

    // answer for s
    let ans = [];

    if (wordDict.includes(s)) {
      ans.push(s);
    }
    // try every break point
    for (let i = 1; i < s.length; i++) {
      const right = s.substring(i);
      if (!wordDict.includes(right)) continue;

      const left = s.substring(0, i);
      const leftAns = append(findAnswer(left), right);
      ans = ans.concat(leftAns);
    }
    mem.set(s, ans);
    return mem.get(s);
  };

  return findAnswer(s);
};
