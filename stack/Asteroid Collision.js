/*
735. Asteroid Collision

Medium

https://leetcode.com/problems/asteroid-collision/

Each asteroid moves at the same speed.
最终结果只可能是 负数在左边，正数在右边

[google]
*/

/*
http://zxi.mytechroad.com/blog/simulation/leetcode-735-asteroid-collision/

*/
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const s = [];
  for (let i = 0; i < asteroids.length; ++i) {
    const size = asteroids[i];
    if (size > 0) {
      // To right, OK
      s.push(size);
    } else {
      // To left
      if (s.length == 0 || s[s.length - 1] < 0){
        // 因为 最终结果只可能是 负数在左边， 正数在右边
        // OK when all are negtives
        s.push(size);
      }
      else if (Math.abs(s[s.length - 1]) <= Math.abs(size)) {
        // Top of the stack is going right.
        // Its size is less than the current one.

        // The current one still alive!
        if (Math.abs(s[s.length - 1]) < Math.abs(size)) {
          --i;
        }
        s.pop(); // Destory the top one moving right
      }
    }
  }

  // s must look like [-s1, -s2, ... , si, sj, ...] 
  // 最终结果只可能是 负数在左边，正数在右边
  return s;
};
