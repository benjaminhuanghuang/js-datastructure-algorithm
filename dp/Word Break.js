/*
139. Word Break

https://leetcode.com/problems/word-break/
*/

/*
https://zxi.mytechroad.com/blog/leetcode/leetcode-139-word-break/

DP / 记忆化递归

Time complexity O(n^2)

Space complexity O(n^2)


*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    const mem = new Map();
    const canBreak = (s) =>{
      if(mem.has(s)) return mem.get(s);
      if(wordDict.includes(s)) {
        mem.set(s, true);
        return true;
      }  
      // try every break point
      for(let i =0; i < s.length; i++){
        const left = s.substring(0, i);
        const right = s.substring(i);
        if(wordDict.includes(right) && canBreak(left))
        {
          mem.set(s, true);
          return true;
        }
      }
      mem.set(s, false);
      return false;
    }


    return canBreak(s);
};