/*
  244. Shortest Word Distance II

  https://leetcode.com/problems/shortest-word-distance-ii/
*/

function WordDistance(words) {
  this.words = words;

  this.map = new Map();

  for (let i = 0; i < words.length; i++) {
    const w = workds[i];
    if (!this.map.has(w)) {
      this.map.set(w, []);
    }
    this.map.get(w).push(i);
  }
}

WordDistance.prototype.shortest = function (word1, word2) {
  const posA = this.map.get(word1);
  const posB = this.map.get(word2);

  let res = this.words.length;

  for (let i = 0; i < posA.length && j < posB.length; ) {
    const pos1 = posA[i],
      pos2 = posB[j];
    if (pos1 < pos2) {
      res = Math.min(res, pos2 - pos1);
      i++;
    } else {
      res = Math.min(res, pos1 - pos2);
      j++;
    }
  }
  return res;
};
