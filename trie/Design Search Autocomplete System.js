/*
LeetCode 642. Design Search Autocomplete System

Hard

https://leetcode.com/problems/design-search-autocomplete-system/

Initializes the object with the sentences and times arrays.

Returns the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed. If there are fewer than 3 matches, return them all.

Input
["AutocompleteSystem", "input", "input", "input", "input"]
[[["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]], ["i"], [" "], ["a"], ["#"]]


Output
[null, ["i love you", "island", "i love leetcode"], ["i love you", "i love leetcode"], [], []]

*/

/*
要求设计一个搜索系统，开始会存储 若干字符串 以及它们对应的 搜索次数 ，

然后用户会连续输入字符，每输入一个字符，应当返回到该字符为止的字符串为前缀的、出现次数前3多的字符串，
如果这样的字符串数量大于3，则取字典序较小的。

当用户输入'#'的时候，代表他输入完成了，此时要将他输入的整个字符串存入这个搜索系统，并且记录搜索次数加1。

思路是Trie + 最小堆 + 哈希表。可以将所有字符串存入Trie中，
并且在每个Trie节点都预处理一下到当前节点为止的子串为前缀的所有字符串中，排名前3的是谁，
这里可以用最小堆 + 哈希表来做，哈希表存每个字符串出现的次数，最小堆维护出现次数最高字典序最小的三个字符串。
同时，每次输入完一个字符，就用用户输入找答案；当输入了'#'的时候，就将StringBuilder对应的字符串s ss存入Trie并且次数加1 11。注意，这里每个Trie节点的最小堆也需要随着哈希表的计数做调整，所以最小堆要先删s ss再按照找前3 33的逻辑加回来。具体请看代码，代码如下

*/

/*
  https://www.youtube.com/watch?v=NZ3lP33mXlY&t=232s&ab_channel=BytebyByte


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
      }
      else{
        return [];
      }
    }
    fileAllChildWords(curr, results);
    return result;
  }

  findAllChildWords(node, results) {
    if(node.isWord){
      results.push(n.prefix);
    } 
    for(const c of Object.keys(node.children)){
      findAllChildWords(node.children[c], results);
    }
  }
}

/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function (sentences, times) {
  this.historySearch = new Map(); // sentences -> tiems
  //
  sentences.forEach((sentence, index) => {
    this.historySearch.set(sentence, times[index]);
  });

  this.trie = new Trie();
  for (let i = 0; i < sentences.length; i++) {
    trie.insert(sentences[i]);
  }

  this.userInput = ""; // 用户输入的字符串
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
  //
  if (c == "#") {
    // 更新搜索历史
    let times = this.historySearch.has(this.userInput) ? this.historySearch.get(this.userInput) : 0;
    this.historySearch.set(finalSentence, times + 1);

    this.this.userInput = "";
    return [];
  }

  if (this.inputData.length == 0) {
    for (let [sentence, times] of this.historySearch) {
      if (this.isMatch(sentence, c)) {
        this.updateQueue([sentence, times]);
      }
    }
    this.inputData.push(c);
  } else {
    this.inputData.push(c);
    this.queue = this.queue.filter((item) => this.isMatch(item[0], this.inputData.join("")));
  }
  // collect
  let result = [];
  for (let i = 0; i < this.queue.length; i++) {
    result.push(this.queue[i][0]);
    if (result.length == 3) break;
  }
  return result;
};

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */
