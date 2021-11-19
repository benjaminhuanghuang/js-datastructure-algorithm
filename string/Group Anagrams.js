/*
49. Group Anagrams

https://leetcode.com/problems/group-anagrams/
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const res = [];
  const map = new Map();

  for (let str of strs) {
    const charArr = str.split("");
    charArr.sort();
    const key = charArr.join("");
    if (!map.has(key)) map.set(key, []);
    const arr = map.get(key);
    arr.push(str);
    map.set(key, arr);
  }

  for (const [key, value] of map) {
    res.push(value); // push the string[] to res
  }
  return res;
};
