/*
  243. Shortest Word Distance
*/

var shortestDistance = function(words, word1, word2) {
  let w1 = -1,
      w2 = -1,
      min = Number.MAX_SAFE_INTEGER;

  for(let i = 0; i < words.length; i++){
      if(words[i] === word1) w1 = i;
      if(words[i] === word2) w2 = i;
      if (w1 != -1 && w2 != -1)min = Math.min(min, Math.abs(w1 - w2))
  }

  return min
};