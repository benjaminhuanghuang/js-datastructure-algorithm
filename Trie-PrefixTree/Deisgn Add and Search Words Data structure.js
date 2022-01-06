/*
211. Design Add and Search Words Data Structure

https://leetcode.com/problems/design-add-and-search-words-data-structure/
*/
/*
  Brute force:

  Trie + DFS
*/

class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = {};
  }
}

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let currNode = this.root;
  for (let i = 0; i < word.length; i++) {
    const ch = word.charAt(i);
    if (!currNode.children[ch]) {
      currNode.children[ch] = new TrieNode();
    }
    currNode = currNode.children[ch];
  }
  currNode.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = (j, root) => {
    let currNode = root;

    for (let i = j; i < word.length; i++) {
      const ch = word.charAt(i);
      if (ch === ".") {
        // '.ab'
        for (const child of Object.values(currNode.children)) {
          if (dfs(i + 1, child)) return true;
        }
        return false;
      } else {
        if (!currNode.children[ch]) {
          return false;
        }
        currNode = currNode.children[ch];
      }
    }
    return currNode.isWord;
  };
  // Main
  return dfs(0, this.root);
};
