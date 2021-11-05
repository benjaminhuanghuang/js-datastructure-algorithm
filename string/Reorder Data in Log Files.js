/*
937. Reorder Data in Log Files

https://leetcode.com/problems/reorder-data-in-log-files/

*/

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let letter = [],
    digit = [];
  for (let v of logs) {
    const firstWord = v.split(" ")[1];
    if (firstWord.charAt(0) >= "0" && firstWrod.charAt(0) <= "9") {
      digit.push(v);
    } else {
      letter.push(v);
    }
  }
  letter.sort(function (a, b) {
    const contentA = a.substring(a.indexOf(" ")+1);
    const contentB = b.substring(b.indexOf(" ")+1);
    
    if (contentA === contentB)
      return  a.split(" ")[0].localeCompare(b.split(" ")[0]);
    return contentA.localeCompare(contentB);
  });
  return letter.concat(digit);
};
