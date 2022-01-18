/*
71. Simplify Path

Medium

https://leetcode.com/problems/simplify-path/

*/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const s = [];
  const dirs = path.split("/");

  for (const dir of dirs) {
    if (dir == "..") {
      if (s.length > 0) s.pop();
    } else if (dir != "." && dir.length > 0) {
      s.push(dir);
    }
  }

  return "/" + s.join("/");
};
