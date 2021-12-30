/*
843. Guess the Word

https://leetcode.com/problems/guess-the-word/
*/


/*

*/
/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
 var findSecretWord = function(wordlist, master) {
  const matchCount = (a, b) => {
    let count = 0, n = a.length;
    for (let i = 0; i < n; ++i) {
      if (a[i] == b[i]) ++count;
    }
    return count;
  }

  for (let i = 0, count = 0; i < 10 && count < 6; ++i) {

    const guess = wordlist[Math.random() * wordlist.length];
    
    count = master.guess(guess);

    nextList = [];
    
    for (const word of wordlist) {
      if (matchCount(guess, word) == count) {
        nextList.push_back(word);
      }
    }
    wordlist = nextList;
  }
};