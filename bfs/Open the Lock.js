/*
752. Open the Lock

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Medium

https://leetcode.com/problems/open-the-lock
*/

/*
  Each node has at most 8 neighbors

  Time O(8 * 1000)
  Space O(10000 + deadends)
*/
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
 var openLock = function (deadends, target) {
  const start = "0000";
  const dead = new Set(deadends);
  if (dead.has(start)) return -1;
  if (start == target) return 0;

  const q = [start];
  const visited = new Set();

  let steps = 0;
  while (q.length > 0) {
    ++steps;
    const size = q.length; // 当前层的节点数
    // level by level
    for (let i = 0; i < size; ++i) {
      const curr = q.shift();
      for (let i = 0; i < 4; ++i)
        for (let j = -1; j <= 1; j += 2) {  // 向上，向下拨锁
          const next = getNext(curr,i, j);
          if (next == target) {
            return steps;
          }
          if (dead.has(next) || visited.has(next)) continue;
          q.push(next);
          visited.add(next);
        }
    }
  }

  return -1;
};


function getNext(curr, i, dir){
  const arr = Array.from(curr);
  const charCode0 = "0".charCodeAt(0);
  arr[i] = String.fromCharCode(((curr[i].charCodeAt(0) -charCode0 + dir + 10) % 10) + charCode0);
  return arr.join('');
}