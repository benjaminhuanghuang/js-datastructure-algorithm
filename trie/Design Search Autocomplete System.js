/*
LeetCode 642. Design Search Autocomplete System


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

思路是Trie + 最小堆 + 哈希表。可以将所有字符串存入Trie中，\
并且在每个Trie节点都预处理一下到当前节点为止的子串为前缀的所有字符串中，排名前3的是谁，
这里可以用最小堆 + 哈希表来做，哈希表存每个字符串出现的次数，最小堆维护出现次数最高字典序最小的三个字符串。
同时，每次输入完一个字符，就用用户输入找答案；当输入了'#'的时候，就将StringBuilder对应的字符串s ss存入Trie并且次数加1 11。注意，这里每个Trie节点的最小堆也需要随着哈希表的计数做调整，所以最小堆要先删s ss再按照找前3 33的逻辑加回来。具体请看代码，代码如下

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

  getNode(word) {
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
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function (sentences, times) {
  this.historySearch = new Map(); // 历史搜索内容&热度 映射表
  sentences.forEach((sentence, index) => {
    this.historySearch.set(sentence, times[index]);
  });
  this.inputData = []; // 用户输入的字符串
  this.queue = []; // 优先级队列
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
  if (c == "#") {
    // 更新搜索历史
    let finalSentence = this.inputData.join("");
    let times = this.historySearch.has(finalSentence) ? this.historySearch.get(finalSentence) : 0;
    this.historySearch.set(finalSentence, times + 1);

    this.inputData = [];
    this.queue = [];
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
  let result = [];
  for (let i = 0; i < this.queue.length; i++) {
    result.push(this.queue[i][0]);
    if (result.length == 3) break;
  }
  return result;
};

// 向优先级队列中插入新的元素（binary search + 插入排序）
AutocompleteSystem.prototype.updateQueue = function (pair) {
  let left = 0,
    right = this.queue.length;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    // 用热度进行比较
    if (this.queue[middle][1] > pair[1]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  // 热度相同根据ASCII码进行比较
  while (right < this.queue.length && this.queue[right][1] == pair[1]) {
    if (pair[0] < this.queue[right][0]) break;
    right++;
  }
  this.queue.splice(right, 0, pair);
};

// 判断input是否和当前sentence匹配
AutocompleteSystem.prototype.isMatch = function (sentence, prefix) {
  // let expression = new RegExp("^" + prefix);
  // return expression.test(sentence);
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] != sentence[i]) return false;
  }
  return true;
};

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */
