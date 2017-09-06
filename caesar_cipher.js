/*



*/

function caesarCipher(str, num) {
  let lowerCaseStr = str.toLowerCase();
  let newString ='';
  num  = num %26;

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const currLetter = lowerCaseStr[i];
    if(currLetter === ' '){
      newString += currLetter;
      continue;
    }

    const currIndex = alphabet.indexOf(currLetter);
    var newIndex = currIndex + num;
    if (newIndex > 25) newIndex =  newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if (str[i] === str[i].toUpperCase()){  // if currLetter is upper case
      newString += alphabet[newIndex].toUpperCase();
    }
    else{
      newString += alphabet[newIndex];
    }

  }
  return newString;
}

module.exports = caesarCipher;
