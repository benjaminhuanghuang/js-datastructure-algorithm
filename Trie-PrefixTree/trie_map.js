/* 
  Trie Data Structure 

  add() / insert()

  search(word)       end with word
  
  
  startsWith(prefix)         use for auto complent

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





myTrie = new Trie()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())