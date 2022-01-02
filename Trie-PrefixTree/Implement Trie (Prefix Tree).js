/*
208. Implement Trie (Prefix Tree)

Medium

https://leetcode.com/problems/implement-trie-prefix-tree/

*/

class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = {};
    this.words = [];
  }
}

var Trie = function() {
  this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let curr = this.root;
  for( let i =0 ;i < word.length ; i++){
    const c = word.charAt(i);
    if(!curr.children[c]){
      curr.children[c] = new TrieNode();
    }
    curr = curr.children[c];
  }
  curr.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let curr = this.root;
  for( let i =0 ;i < word.length ; i++){
    const c = word.charAt(i);
    if(!curr.children[c]){
     return false;
    }
    curr = curr.children[c];
  }
  return curr.isWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let curr = this.root;
  for( let i =0 ;i < prefix.length ; i++){
    const c = prefix.charAt(i);
    if(!curr.children[c]){
     return false;
    }
    curr = curr.children[c];
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */