/*
126. Word Ladder II

Hard

https://leetcode.com/problems/word-ladder-ii/

找到最短的 word ladder，可能存在多个path
和 I 的区别在于不能提前退出
要生成路径，就要知道每个节点的parent

https://www.youtube.com/watch?v=2UVwtjYVsmk&ab_channel=%E5%9B%BE%E7%81%B5%E6%98%9F%E7%90%83TuringPlanet
*/

/*-----------------------------------------------------------
My Solution

II 不能用 I 的 getNeighbours()不能删除用过的单词，如果不删除 tax生成tex， tex又会生成tax
但是对于  ted->tad->tax   
         ted->tex->tax
如果在 getNeighbours(tad)执行时删掉tax，那么就是丢失tex->tax

要生成路径，就要知道每个节点的parent
-----------------------------------------------------------*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  // 0. put word list in to a set
  const dict = new Set(wordList);
  // corner case
  if (!dict.has(endWord)) {
    return [];
  }
  dict.delete(beginWord);

  let answer = [];

  // 注意没有删除用过的单词
  const getNeighbours = (word) => {
    let neighbors = [];
    for (let i = 0; i < word.length; i++) {
      const left = word.substring(0, i);
      const right = word.substring(i + 1);
      // try 26 chars
      const a = "a".charCodeAt(0);
      for (let k = 0; k < 26; k++) {
        const c = String.fromCharCode(k + a);
        const newWord = left + c + right;
        if (dict.has(newWord)) {
          neighbors.push(newWord);
        }
      }
    }
    return neighbors;
  };

  const dfs = (ans, parentMap, path, word, beginWord) => {
    if (word == beginWord) {
      ans.push([...path]);
      return;
    }
    for (const parent of parentMap.get(word)) {
      path.unshift(parent);
      dfs(ans, parentMap, path, parent, beginWord);
      path.shift();
    }
  };

  // BFS
  const q = [beginWord];
  const parentMap = new Map([[beginWord, []]]); // node-> [parent1, parent2...] 用于构造path和检查单词是否扩展过
  const stepsMap = new Map(); // node-> step
  let step =0;
  let found= false;
  while (q.length > 0 && !found) {
    step++;
    let count = q.length;
    const temp_parent = new Map(); // 避免丢失路径
    for (let i = 0; i < count; i++) {
      const word = q.shift();
      for (const neighbour of getNeighbours(word)) {
        if(neighbour == endWord){
          if (!parentMap.has(neighbour)) {
            parentMap.set(neighbour, word);
          } else {
            parentMap.get(neighbour).push(word);
          }
        }else {
          // Not a new word but another transform with same number of steps
          if(stepsMap.has(neighbour) && step < stepsMap.get(neighbour)){
            if (!parentMap.has(neighbour)) {
              parentMap.set(neighbour, word);
            } else {
              parentMap.get(neighbour).push(word);
            } 
          }
        }
        dict.delete(neighbour);
        q.push(neighbour);
        stepsMap.set(neighbour, (stepsMap.get(neighbour)||0) + 1);
        parentMap.get(neighbour).push(word);
      } 
    } 
  }

  // DFS construct path
  if (parentMap.has(endWord)) {
    //不能在这里return， 因为有可能有多条路径
    const ans = [];
    const path = [endWord];
    dfs(ans, parent, path, endWord, beginWord);
    return ans;
  }
  return [];
};

/*-----------------------------------------------------------
  
  https://www.youtube.com/watch?v=PblfQrdWXQ4&ab_channel=HuaHua

  Time Complexity: O(n*(26^l)), l = len(word), n=|wordList| 单词个数

  Space Complexity: O(n)

  和 I 的区别在于不能提前退出,因为可能存在多条路径
-----------------------------------------------------------*/
var findLadders = function (beginWord, endWord, wordList) {
  // 0. put word list in to a set
  const dict = new Set(wordList);
  // corner case
  if (!dict.has(endWord)) {
    return [];
  }
  dict.delete(beginWord);

 
  //
  const dfs = (ans, parentMap, path, word, beginWord) => {
    if (word == beginWord) {
      ans.push([...path]);
      return;
    }
    for (const parent of parentMap.get(word)) {
      path.unshift(parent);
      dfs(ans, parentMap, path, parent, beginWord);
      path.shift();
    }
  };

  // BFS
  const q = [beginWord];
  const parentMap = new Map([[beginWord, []]]); // node-> [parent1, parent2...] 用于构造path和检查单词是否扩展过
  let answer = [];

  while (q.length > 0) {
    let count = q.length;
    const temp_parent = new Map(); // 避免丢失路径
    for (let i = 0; i < count; i++) {
      const word = q.shift();
      for (const neighbour of getNeighbours(word)) {
        if (!parent.has(neighbour)) {
          // neighbour 没有被展开过
          if (!temp_parent.has(neighbour)) {
            q.push(neighbour);
            temp_parent.set(neighbour, []);
          }
          temp_parent.get(neighbour).push(word);
        }
      }
    }
    // merge temp_parent to parent
    for (const [node, parents] of temp_parent) {
      if (!parentMap.has(node)) {
        parentMap.set(node, parents);
      } else {
        parentMap.set(node, parentMap.get(node).concat(parents));
      }
    }

    // DFS construct path
    if (temp_parent.has(endWord)) {
      //不能在这里return， 因为有可能有多条路径
      const ans = [];
      const path = [endWord];
      dfs(ans, parent, path, endWord, beginWord);
      return ans;
    }
  }


  return [];
};

/*-----------------------------------------------------------
  https://www.youtube.com/watch?v=UJzO3NSjqvs&ab_channel=GokulEzhumalai
  
  Time Complexity: O(n*(26^l)), l = len(word), n=|wordList| 单词个数

  Space Complexity: O(n)
-----------------------------------------------------------*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  // 0. put word list in to a set
  const dict = new Set(wordList);
  // corner case
  if (!dict.has(endWord)) {
    return [];
  }

  let answer = [];
  //
  const getNeighbors = (word) => {
    let neighbors = [];
    for (let i = 0; i < word.length; i++) {
      const left = word.substring(0, i);
      const right = word.substring(i + 1);
      // try 26 chars
      const a = "a".charCodeAt(0);
      for (let k = 0; k < 26; k++) {
        const c = String.fromCharCode(k + a);
        const newWord = left + c + right;
        if (dict.has(newWord) && word != newWord) {
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
    for (let neighbour of getNeighbors(word)) {
      if (!graph.has(neighbour)) {
        node = new Node(neighbour);
        graph.set(neighbour, node);
      }
      let node = graph.get(neighbour);
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
  let min = Number.MAX_SAFE_INTEGER; // 最短步数
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
