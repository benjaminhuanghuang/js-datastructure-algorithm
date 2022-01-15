/*
【Lintcode】1396. Set Union

  给定一个二维数组，每一行代表一个集合，要求将所有行的集合都做并集，问最后剩下几个集合。
*/

function setUnion(sets) {
  if (sets == null || sets.length == 0) {
    return 0;
  }

  const n = sets.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (sets[i] == null || sets[j] == null) {
        continue;
      }
      if (find(sets[i], sets[j])) {
        sets[i] = union(sets[i], sets[j]);
        sets[j] = null;
        // 回溯
        i = -1;
        break;
      }
    }
  }

  let count = 0;
  for (let i= 0; i < sets.length; i++) {
    if (sets[i] != null) {
      count++;
    }
  }

  return count;
}
