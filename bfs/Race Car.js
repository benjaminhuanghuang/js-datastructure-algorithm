/*
818. Race Car

Hard

https://leetcode.com/problems/race-car/
*/

/*
  BFS
  http://zxi.mytechroad.com/blog/graph/leetcode-818-race-car/
*/

/**
 * @param {number} target
 * @return {number}
 */
 var racecar = function (target) {
  //[ pos, speesd]
  const q = [[0, 1]];

  const visited = new Set();
  visited.add("0_1");
  visited.add("0_-1");

  let steps = 0;
  while (q.length > 0) {
    let size = q.length;
    while (size--) {
      const [pos, speed] = q.shift();

      const pos1 = pos + speed;
      const speed1 = speed * 2;
      const p1 = [pos1, speed1];
      if (pos1 == target) return steps + 1;
      if (p1.first > 0 && p1.first < 2 * target) q.push(p1);

      const speed2 = speed > 0 ? -1 : 1;
      const p2 = [pos, speed2];
      const key2 = pos + "_" + speed2;
      if (!visited.has(key2)) {
        q.push(p2);
        visited.add(key2);
      }
    }
    ++steps;
  }
  return -1;
};
