/*
394. Decode String

https://leetcode.com/problems/decode-string/

Input: s = "3[a]2[bc]"
Output: "aaabcbc"


Input: s = "3[a2[c]]"
Output: "accaccacc"
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  if (s.length === 0) return "";
  const isDigit = (s) => {
    return /^\d$/.test(s);
  };
  let ans = "";
  // 记录'['之前的数字
  const countStack = [];
  // 记录'['之前的运算结果
  const ansStack = [];
  let i = 0;
  let curNum = 0;
  while (i < s.length) {
    const ch = s.charAt(i);
    if (isDigit(ch)) {
      while (isDigit(s.charAt(i))) {
        curNum = 10 * curNum + parseInt(s.charAt(i));
        i++;
      }
    } else if (ch == "[") {
      // backup ans ans count and work on []
      ansStack.push(ans);
      ans = ""; // reset ans
      // 此push可以放在上面的while循环中
      countStack.push(curNum);
      curNum = 0; // reset curNum
      i++;
    } else if (ch == "]") {
      // 取出计算结果，和数字
      let prevAns = ansStack.pop();
      const repeatTimes = countStack.pop();

      for (let j = 0; j < repeatTimes; j++) {
        prevAns += ans;
      }
      ans = prevAns;
      i++;
    } else {
      // current char is letter
      ans += ch;
      i++;
    }
  }
  return ans;
};
