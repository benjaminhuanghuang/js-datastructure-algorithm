let keyRows = [];
keyRows.push(new Set(['q','w','e','r','t','y','u','i','o','p']));
keyRows.push(new Set(['a','s','d','f','g','h','j','k','l']));
keyRows.push(new Set(['z','x','c','v','b','n','m']));

var findWords = function(words) {
  let res = [];
  if(words == 0 || words.length == 0)
    return res;

  for(w of words)
  {
    let lowerCase = w.toLowerCase();
    let keyRow = getKeyRow(lowerCase[0]);
    if(wordInRow(lowerCase, keyRow))
      res.push(w);  
  }
  return res;
};

function wordInRow(word, row)
{
  for(let i = 1;i < w.length; i++)
  {
    if(!row.has(word[i]))
      return false;
  }
  return true;
}
function getKeyRow(c)
{
  for (let i =0; i < keyRows.length ; i ++)
  {
    if(keyRows[i].has(c))
      return keyRows[i];
  }
  return null;
}

let input = ["Hello","Alaska","Dad","Peace"];

let res = findWords(input);
console.log(res);