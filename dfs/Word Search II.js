/*
212. Word Search II

Hard

https://leetcode.com/problems/word-search-ii/

[MS]
*/

/*
  Solution 1: DFS backtracking to find each word in the board

  每个单词都要搜索一遍， 假设每个单词长度为l, 要尝试grid上所有起点m*n, 每个字母4个方向
  Time Complexity O(sum(m*n*(4^l)))

  Sapce Complexity: O(l)  最大递归深度是 l

  https://www.youtube.com/watch?v=asbcE9mZz_U&ab_channel=NeetCode
*/
var findWords = function (board, words) {
  const ans = [];

  for (const word of words) {
    if (exist(board, word)) {
      ans.push(word);
    }
  }
  return ans;
};

function exist(board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (search(board, word, 0, row, col)) {
        return true;
      }
    }
  }
  return false;
}

function search(board, word, pos, row, col) {
  if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || word.charAt(pos) != board[row][col]) {
    return false;
  }

  if (pos == word.length - 1) {
    return true;
  }

  // backtracking
  const cur = board[row][col];
  board[row][col] = "#"; // visited
  const found =
    search(board, word, pos + 1, row + 1, col) ||
    search(board, word, pos + 1, row - 1, col) ||
    search(board, word, pos + 1, row, col + 1) ||
    search(board, word, pos + 1, row, col - 1);
  // recover
  board[row][col] = cur;

  return found;
}

/*
  Solution 2: trie + DFS
  
  Time Complexity O(m*n*(4^l))

  Sapce Complexity: O(sum(l)) 所有单词长度

  有相同前缀时有优势
  
  https://www.youtube.com/watch?v=aEEJ3xHIF5o&ab_channel=HuaHua
*/
var findWords = function (board, words) {
  const root = new TrieNode();

  // add word into trie
  for (const word of words) {
    let curr = root;
    for (const c of word) {
      if (!curr.children[c]) {
        curr.children[c] = new TrieNode();
      }
      curr = curr.children[c];
    }
    curr.word = word;
  }

  const rows = board.length;
  const cols = board[0].length;

  const ans = [];
  const walk = (row, col, node) => {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] == "#") {
      return false;
    }

    const curr = board[row][col];

    const nextNode = node.children[curr];

    if (!nextNode) return;

    if (nextNode.word) {
      ans.push(nextNode.word);
      nextNode.word = null;
    }

    // backtracking
    board[row][col] = "#";
    walk(row - 1, col, nextNode);
    walk(row + 1, col, nextNode);
    walk(row, col - 1, nextNode);
    walk(row, col + 1, nextNode);
    board[row][col] = curr;
  };

  // main
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      walk(row, col, root);
    }
  }
  return ans;
};

class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = {};
    this.words = [];
  }
}


/*
https://www.youtube.com/watch?v=asbcE9mZz_U&ab_channel=NeetCode

*/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(board, words) {
    
};