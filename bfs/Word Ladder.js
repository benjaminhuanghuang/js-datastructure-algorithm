/*
127. Word Ladder
https://leetcode.com/problems/word-ladder/

找到解的长度
*/

/*
http://zxi.mytechroad.com/blog/searching/127-word-ladder/ 

最短路径类型的题目一般用BFS

Time Complexity: O(n*26^l), l = len(word), n=|wordList| 单词个数

Space Complexity: O(n)
*/

/*
Graph + BFS
https://www.youtube.com/watch?v=z_pI8OtmpmA


1. create a graph using map
2. find neighbors
3. BFS
单词用过要从dict中去掉
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  // 0. put word list in to a set
  const dict = new Set(wordList);
  // corner case
  if (!dict.has(endWord)) {
    return 0;
  }

  // 替换word中的每一个字母,得到的单词就是word的neighbour
  const findNeighbours = (word) => {
    const queue = [];
    // 替换word中的每一个字母
    for (let i = 0; i < word.length; i++) {
      const left = word.substring(0, i);
      const right = word.substring(i + 1);
      // try 26 chars
      const a = "a".charCodeAt(0);
      for (let k = 0; k < 26; k++) {
        const c = String.fromCharCode(k + a);
        const newWord = left + c + right;
        if (dict.has(newWord)) {
          queue.push(newWord);
          dict.delete(newWord);  // ！单词用过要从dict中去掉
        }
      }
    }
    return queue;
  };

  let queue = findNeighbours(beginWord);

  let distance = 2; // beignword to it's neighbor
  while (queue.length > 0) {
    let count = queue.length;

    for (let i = 0; i < count; i++) {
      const word = queue.shift();
      if (word === endWord) {
        return distance;
      }
      queue = queue.concat(findNeighbours(word));
    }
    distance++;
  }
  return 0;
};
