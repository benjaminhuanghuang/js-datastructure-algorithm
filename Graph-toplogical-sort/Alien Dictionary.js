/*
269. Alien Dictionary

Hard

https://leetcode.com/problems/alien-dictionary/
https://www.lintcode.com/problem/892/

*/

/*

https://medium.com/@timothyhuang514/graph-alien-dictionary-d2b104c36d8e


Build graph
Identify vertices that have no incoming edge
Repeatedly pick vertex of in-degree 0 and append it to the output


Time Complexity: O(|V| + |E|)
The time it takes to build a graph would be O(|E|) since we need to traverse through 
all the edges and initializing a queue that has vertices w in-degree 0 would take O(|V|) 
assuming we have V vertices. Lastly, dequeue and output the vertices would take O(|V|) 
as well since dequeueing and outputting each vertex are linear time.

Space Complexity: O(|V|)
The memory needed for this problem would be the in-degree array and a dictionary containing 
all the vertices as keys and vertices they're sourcing to as values. Both would take O(|V|)


*/

/*
https://www.youtube.com/watch?v=6kTZYvNNyps&ab_channel=NeetCode

*/
/**
 * @param {string[]} words
 * @return {string}
 */

var alienOrder = function (words) {
  const graph = new Map();

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);
    // for invalid case 'apps' 'app'
    if (w1.length > w2.length && w1.substring(0, minLen) == w2) {
      return "";
    }

    for (let j = 0; j < minLen; j++) {
      // the first different char
      if (w1.charAt(j) != w2.charAt(j)) {
        if (!graph.has(w1.charAt(j))) {
          graph.set(w1.charAt(j), []);
        }
        graph.get(w1.charAt(j), w2.charAt(j));
        break;
      }
    }
  }

  const visited = {}; // false: visited, true: visting

  const res = [];

  const dfs = (c) => {
    if (visited.hasOwnProperty(c)) {
      return visited[c];
    }

    visited[c] = true; // visting
    for (const nei of graph.get(c)) {
      if (dfs(nei)) return true;
    }
    visited[c] = false; // visited
    res.unshift(c);
  };

  for (const c of graph.keys()) {
    if (dfs(c)) return ""; // find cycle
  }

  return res.join('')
};
