/*
1268. Search Suggestions System

Level: Medium

https://leetcode.com/problems/search-suggestions-system

Return list of lists of the suggested products after each character of searchWord is typed. 
*/

/*
  Solution: 
*/
class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = {}; // char-> children
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i);
      if (!curr.children[c]) {
        curr.children[c] = new TrieNode();
      }
      curr = curr.children[c];
    }
    curr.isWord = true;
  }

  insertWords(words) {
    for (const word of words) {
      this.insert(word);
    }
  }

  get(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i);
      curr = curr.children[c];
      if (!curr) {
        break;
      }
    }
    return curr;
  }

  keysWithPrefix(prefix, limit) {
    const queue = [];
    this.collect(this.getNode(prefix), prefix, queue, limit);
    return queue;
  }

  collect(node, prefix, queue, limit) {
    if (node == null || queue.length === limit) return;

    if (node.isWord === true) {
      queue.push(prefix);
    }

    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(i + 97);
      this.collect(node.children[char], prefix + char, queue, limit);
    }
  }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  // Init trie
  const trie = new Trie();
  trie.insertWords(products);

  const res = [];
  // search the prefix
  let substr = "";
  for (const char of searchWord) {
    substr += char;
    const words = trie.keysWithPrefix(substr, 3);
    res.push(words);
  }

  return res;
};
