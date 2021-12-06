/*
1268. Search Suggestions System

Level: Medium

https://leetcode.com/problems/search-suggestions-system

Return list of lists of the suggested products after each character of searchWord is typed. 
*/

/*
  Solution: 
*/
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
class TrieNode {
  constructor() {
    this.isWord = false;
    this.prefix = "";
    this.children = {}; // char-> children
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertWords(words) {
    for (const word of words) {
      this.insertWord(word);
    }
  }

  insertWord(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i);
      if (!curr.children[c]) {
        curr.children[c] = new TrieNode();
        curr.children[c].prefix = word.substring(0, i + 1);
      }
      curr = curr.children[c];
    }
    curr.isWord = true;
  }

  getWordsForPrefix(prefix) {
    const results = [];
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const c = prefix.charAt(i);
      if (curr.children[c]) {
        curr = curr.children[c];
      } else {
        return [];
      }
    }
    this.findAllChildWords(curr, results, limit);
    return results;
  }

  findAllChildWords(node, results) {
    if (node == null) {
      return;
    }
    if (node.isWord) {
      results.push(node.prefix);
    }
    for (const c of Object.keys(node.children)) {
      this.findAllChildWords(node.children[c], results);
    }
  }

  getSuggestionsForPrefix(prefix, limit) {
    const results = [];
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const c = prefix.charAt(i);
      if (curr.children[c]) {
        curr = curr.children[c];
      } else {
        return [];
      }
    }
    this.findSuggestion(curr, results, limit);
    return results;
  }

  findSuggestion(node, results, limit) {
    if (node == null || results.length === limit) return;

    if (node.isWord === true) {
      results.push(node.prefix);
    }

    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(i + 97);
      this.findSuggestion(node.children[char], results, limit);
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
    const words = trie.getSuggestionsForPrefix(substr, 3);
    res.push(words);
  }

  return res;
};
