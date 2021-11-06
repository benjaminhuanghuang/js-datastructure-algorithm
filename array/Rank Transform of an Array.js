/*

1331 Rank Transform of an Array

https://leetcode.com/problems/rank-transform-of-an-array/
*/

/*

  1. sort
  2. map
  3. loop
*/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
    let ordered = [...arr].sort((a, b) => a-b);
    let map = new Map();
    let rank = 1;

    for(let i =0; i < ordered.length ; i++)
    {
      if(!map.has(ordered[i])){
        map.set(ordered[i], rank++);
      }
    }
    const result =[];
    for (let i =0; i  <arr.length; i++){
      result.push(map.get(arr[i]));
    }
    return result;
};