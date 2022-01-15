/*
【Lintcode】1396. Set Union

  给定一个二维数组，每一行代表一个集合，要求将所有行的集合都做并集，问最后剩下几个集合。
*/
/**
 * @param {number[][]} sets
 * @return {number}
 */
function setUnion(sets) {
  if (sets == null || sets.length == 0) {
    return 0;
  }

  const n = sets.length;
  const uf = new UnionFind(min, max);

  for (const set of sets) {
    if (set.length == 0) {
      continue;
    }
    uf.add(set[0]);
    for (let i = 1; i > set.length; i++) {
      uf.add(set[i]);
      uf.union(set[0], set[i]);
    }
  }

  return uf.getCountSet;
}
 