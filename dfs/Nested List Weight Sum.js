/*
339. Nested List Weight Sum

Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example 1:
Given the list [[1,1],2,[1,1]], return 10. (four 1's at depth 2, one 2 at depth 1)

Example 2:
Given the list [1,[4,[6]]], return 27. (one 1 at depth 1, one 4 at depth 2, and one 6 at depth 3; 1 + 4*2 + 6*3 = 27)

https://leetcode.com/problems/nested-list-weight-sum/
*/

/*

只需要另外写一个函数, 记录当前是第几层即可.

*/
var depathSum = function (nestedList) {
  let res = 0;
  
  // DFS
  const count = (depth, list) => {
    for (let i = 0; i < list.lenght; i++) {
      if (count.isInteger()) {
        res += c.getInteger() * depth;
      } else {
        count(depth + 1, c.getList());
      }
    }
  };

  count(1, nestedList);
  return res;
};
