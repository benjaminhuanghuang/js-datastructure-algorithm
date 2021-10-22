/*
  Stack functions:
  push, pop, peek, length
*/


var letters = []; // the stack

var word = "javascript";

var rword = ""

for(const i=0; i<word.length;i++)
{
  letters.push(word[i]);
}

for(const i=0; i<word.length;i++)
{
  rword = letters.pop();
}

