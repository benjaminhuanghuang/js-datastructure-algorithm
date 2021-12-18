/*
834. Sum of Distances in Tree

Hard


https://leetcode.com/problems/sum-of-distances-in-tree/

[Google ]
*/
/*
任意一个节点，路径分为两类，一类向下，一类向上

对于root， 向下的路径树是所有node的深度总和

*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
  const graph = new Map();
  // bulid the graph
  for (let i = 0; i < edges.length; i++) {
    const [start, end] = edges[i];
    if (!graph.has(start)) {
      graph.set(start, []);
    }
    graph.get(start).push(end);

    if (!graph.has(end)) {
      graph.set(end, []);
    }
    graph.get(end).push(start);
  }

  // count[i] 是以i为root 子树的节点数量（包括is）
  let count = new Array(n).fill(1);
  let res = new Array(n).fill(0);

  // 只得到root的结果, bottom to up
  const forRoot = (root, parent) => {
    if(!graph.has(root)) return;
    const children = graph.get(root);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child != parent) {
        forRoot(child, root);
        count[root] += count[child];
        res[root] += res[child] + count[child];
      }
    }
  };
  // up to bottom
  const forChild = (root, parent) => {
    if(!graph.has(root)) return;
    const children = graph.get(root);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child != parent) {
        res[child] = res[root] - count[child] + n - count[child];
        forChild(child, root);
      }
    }
  };

  forRoot(0, -1);
  forChild(0, -1);
  return res;
};
