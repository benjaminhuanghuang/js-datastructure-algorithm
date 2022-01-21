/*
126. Word Ladder II

https://leetcode.com/problems/word-ladder-ii/

*/

/*
  https://www.youtube.com/watch?v=UJzO3NSjqvs&ab_channel=GokulEzhumalai

*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return [];
  let answer = [];
  //
  const map = new Map();
  wordList.forEach((word) => map.set(word, true));
  if (!map.has(beginWord)) {
    map.set(beginWord, true);
    wordList.unshift(beginWord);
  }

  
  const getNeighbors = (map, word) => {
    let neighbors = [];
    for (let i = 0; i < word.length; i++) {
      const left = word.substring(0, i);
      const right = word.substring(i + 1);
      // try 26 chars
      const a = "a".charCodeAt(0);
      for (let k = 0; k < 26; k++) {
        const c = String.fromCharCode(k + a);
        const newWord = left + c + right;
        if (map.has(newWord) && word != newWord) {
          neighbors.push(newWord);
        }
      }
    }
    return neighbors;
  };

  // 1. Construct a graph
  const graph = new Map();
  for (const word of wordList) {
    if (!graph.has(word)) {
      graph.set(word, new Node(word));
    }
    for (let neighborWord of getNeighbors(map, word)) {
      let node = graph.get(neighborWord);
      if (!node) {
        node = new Node(neighborWord);
        graph.set(neighborWord, node);
      }
      graph.get(word).neighbors.push(node);
    }
    // 'hit' -> (hit, [(hot,[], -1)], -1)
  }

  // 2. BFS Assign distance for each node from start node
  let distance = 0;
  let q = [graph.get(beginWord)];
  while (q.length > 0) {
    let size = q.length; // node count in one level
    while (size--) {
      let currNode = q.shift();
      if (currNode.distance != -1) continue; //accessed
      currNode.distance = distance + 1;
      for (let node of currNode.neighbors) {
        if (node.distance === -1) {
          q.push(node);
        }
      }
    }
    distance++;
  }

  // 3. Construct all the paths
  let min = Number.MAX_SAFE_INTEGER;
  let stack = [[graph.get(beginWord), []]];
  while (stack.length > 0) {
    let [currNode, chain] = stack.pop();
    if (currNode.val === endWord) {
      min = Math.min(min, chain.length + 1);
      answer.push([...chain, currNode.val]);
    } else {
      for (const nei of currNode.neighbors) {
        if (nei.distance > currNode.distance) {
          stack.push([nei, [...chain, currNode.val]]);
        }
      }
    }
  }
  // 4. return only min sequences
  answer = answer.filter((arr) => arr.length === min);
  return answer;
};

class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
    this.distance = -1;
  }
}
