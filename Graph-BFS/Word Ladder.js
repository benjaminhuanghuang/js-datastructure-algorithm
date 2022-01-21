/*
127. Word Ladder
https://leetcode.com/problems/word-ladder/

找到解的长度
*/

/*
http://zxi.mytechroad.com/blog/searching/127-word-ladder/ 

最短路径类型的题目一般用BFS

Time Complexity: O(n*26^l), l = len(word), n=|wordList| 单词个数

Space Complexity: O(n)
*/


/*
Graph + BFS
https://www.youtube.com/watch?v=z_pI8OtmpmA


1. create a graph using map
2. find neighbors
3. BFS

*/



/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const dict = {};
  for(let i =0;i < wordList.length ; i++) {
    dict[wordList[i]] = true;
  }
  
  // corner case
  if(!dict[endWord]) {
    return 0;
  }

  const queue = [];
  let distance = 2;   // beignworkd to it's neighbor
  const findNeighbors = (queue, word) =>{
      for(let i =0; i < word.length ; i++){
        const left = word.substring(0, i);
        const right = word.substring(i+1);
        // try 26 chars
        const a = 'a'.charCodeAt(0);
        for( let k =0; k < 26; k++){
          const c = String.fromCharCode(k + a);
          const newWord = left + c + right;
          if(dict[newWord]){
            queue.push(newWord);
            delete dict[newWord];
          }
        }
      }
  }

  findNeighbors(queue, beginWord);

  while(queue.length > 0) {
    let currLevel = queue.length;
    
    for(let i=0;i < currLevel ; i++) {
      const word = queue.shift();
      if(word === endWord){
        return distance;
      }
      findNeighbors(queue, word);
    }
    distance++;
  }
  return 0;
};
