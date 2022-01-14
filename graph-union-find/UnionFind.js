class UnionFind {
  constructor(n) {
    this.father = new Array(n + 1);
    // 以x为root的component中有几个元素
    this.count = new Array(n + 1);
    for (let i = 1; i <= n; i++) {
      this.father[i] = i;
      this.count[i] = 1;
    }
    this.countOfSets = n;
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
      this.countOfSets -- ;
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
  countOfComponents() {
    return this.countOfSets;
  }
}
