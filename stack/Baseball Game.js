/*
682. Baseball Game

https://leetcode.com/problems/baseball-game/
*/

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const scores = [];
  for (op of ops) {
    if (op === "+") {
      const s1 = scores[scores.length - 2];
      const s2 = scores[scores.length - 1];
      scores.push(s1 + s2);
    } else if (op === "C") {
      scores.pop();
    } else if (op === "D") {
      const s = scores[scores.length - 1];
      scores.push(2 * s);
    } else {
      scores.push(parseInt(op));
    }
  }

  const sum = scores.reduce((accumulator, val) => accumulator + val, 0);
  return sum;
};
