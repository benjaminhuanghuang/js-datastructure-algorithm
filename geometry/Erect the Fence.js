/*
  587. Erect the Fence
  https://leetcode.com/problems/erect-the-fence/
*/

/*
  

*/
/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function (trees) {
  trees.sort((t1, t2) => {
    if (t1.x == t2.x) {
      return t1.y - t2.y;
    }
    return t1.x - t2.x;
  });



};
