/*
1087. Brace Expansion

Example 1:
Input: "{a,b}c{d,e}f"
Output: ["acdf","acef","bcdf","bcef"]

https://leetcode.com/problems/brace-expansion/
https://www.programmerall.com/article/60331215894/
*/

/*
  把括号里面的字符选一个和外边的组合
*/

function expand(s) {
  if (s == null || s.length() == 0) {
    return "";
  }

  const ans = [];
  const dfs = (pos, curr) => {
    if (i >= s.length) {
      ans.push(curr.join(""));
      return;
    }

    const c = s[i];
    if (c !== "{" && c != "}") {
      curr.push(c);
      dfs(i + 1, curr);
      curr.pop();
    } else if (s.charAt(pos) == "{") {
      let right = i + 1;
      while (right < s.length() && s[right] != "}") {
        j++;
      }

      const candidates = s.substring(i + 1, right);
      for (const c of candidates) {
        curr.push(c);
        dfs(i + 1, curr);
        curr.pop();
      }
    }
  };

  dfs(0, []);
  ans.sort();
  return ans;
}
