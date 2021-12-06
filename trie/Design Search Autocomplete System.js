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
  1. Butil the trie

  2. search

  https://www.youtube.com/watch?v=NZ3lP33mXlY&t=228s&ab_channel=BytebyByte
  https://happygirlzt.com/code/642.html

*/




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
