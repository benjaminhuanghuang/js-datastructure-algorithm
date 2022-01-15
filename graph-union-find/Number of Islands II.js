/*

  305. Number of Islands II
  
  https://leetcode.com/problems/number-of-islands-ii/
  https://www.lintcode.com/problem/number-of-islands-ii/description
*/

/*

*/

class UnionFind {
  constructor(n) {
    this.father = new Array(n);
    //🇺每个元素所在component中有几个元素
    this.size = new Array(n);
    for (let i = 1; i <= n; i++) {
      this.father[i] = i;
      this.count[i] = 1;
    }
    // component 个数
    this.countSets = n;
  }

  // Add a new component into the union find
  add(newElement) {
    if(!this.contains(newElement)){
      this.father[newElement] = newElement;
      this.size[newElement]  =1;
      this.countSets++;
    }
  }

  contains(x) {
    return this.father[x] != Number.MAX_SAFE_INTEGER
  }

  // find root parent of x
  find(x) {
    if (this.father[x] == x) {
      return x;
    }
    const root = this.find(this.father[x]);
    // 压缩路径
    this.father[x] = root;
    return root;
  }

  // union / connect
  union(a, b) {
    const root_a = this.find(a);
    const root_b = this.find(b);
    if (root_a != root_b) {
      // 把 a 合并到 b
      this.father[root_a] = root_b;
      this.count[root_b] += this.count[root_a];
      this.countOfSets--;
    }
  }

  // is a connected to b
  isInSameSet(a, b) {
    const root_a = this.find(a);
    const root_b = this.find(b);
    return root_a == root_b;
  }

  // 包含x的连通块内的节点数
  countOfSetContains(x) {
    return this.size[this.find(x)];
  }

  // 连通块的数量
  getCountSet() {
    return this.countSets;
  }
}

var numIslands2 = function (n, m, operations) {
  const ans = [];
  
  // 把n,m转化成一维数组
  const uf = new UnionFind(n  * m -1);

  // 
  for (const [x, y] of operations) {
    const pointId = ny * m + x;
    // x, y is island
    if (uf.contians(pointId)) {
      ans.push(uf.getCountSet()); // 有几个连通分量
      continue;
    }
    // set x, y to island
    add(pointId);

    // 4个方向
    const neighbors = getNeighbors(x, y, n, m);
    for (const [nx, ny] of neighbors) {
      const nPointId = ny * m + x;

      if (uf.contains(nPointId)) {
        uf.union(pointId, nPointId);
      }
    }

    ans.push(uf.getCountSet());
  }

  return ans;
};


function getNeighbors(x, y, n, m) {
  // 4  个方向
  // isValid?
}