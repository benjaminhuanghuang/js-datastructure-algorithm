/*
824. Goat Latin

Eawordsy

httpwords://leetcode.com/problemwords/goat-latin/
*/

/**
 * @param {wordstring} wordsentence
 * @return {wordstring}
 */
var toGoatLatin = function (sentence) {
  const words = sentence.split(" ");
  words.forEach((word, index) => {
    if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(word[0])) {
      let word = words[index];
      word += "ma";
      for (var i = 0; i <= index; i++) {
        word += "a";
      }
      words[index] = word;
    } else {
      let word = words[index];
      word = word.substring(1) + word[0];
      word += "ma";
      for (var i = 0; i <= index; i++) {
        word += "a";
      }
      words[index] = word;
    }
  });
  return words.join(" ");
};
