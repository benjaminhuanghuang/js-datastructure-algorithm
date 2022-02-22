/*
68. Text Justification

Hard

https://leetcode.com/problems/text-justification/

[Airebnb, LinkedIn, MS]

单词排成行, 尽量均匀插入空格，最后用空格填充
*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const ans = [];

  let i = 0; // pointer to word in words

  let charLength = 0; // 当前行, 单词所占用的空间
  let slotCount = 0; // 当前行, 单词之间有几个分隔， 每个分隔由若干空格构成
  let list = []; // 可以放到一行的words

  while (i < words.length) {
    const word = words[i];
    // 需要的空间
    let spaceNeeded = charLength + word.length + slotCount;
    if (charLength > 0) {
      spaceNeeded += 1; // add one space
    }

    if (spaceNeeded > maxWidth) {
      ans.push(constructLine(list, charLength, slotCount, maxWidth));
      list = [];
      charLength = 0;
      slotCount = 0;
    } else {
      list.push(word);
      if (charLength > 0) {
        slotCount++;
      }
      charLength += word.length;
      i++;
    }
  }
  // last line
  if (list.length > 0) {
    ans.push(constructLastLine(list, maxWidth));
  }
  return ans;
};

function constructLine(words, charLength, slots, maxWidth) {
  if (slots == 0) {
    return constructLastLine(words, maxWidth);
  }

  const totalSpace = maxWidth - charLength;
  let spaceRest = totalSpace % slots;
  if (spaceRest == 0) {
    return words.join(spacesToString(Math.floor(totalSpace / slots)));
  } else {
    // 把spaceRest 均分到前面的space上
    const spaces = new Array(slots).fill(Math.floor(totalSpace / slots));
    let i = 0;
    while (spaceRest > 0) {
      spaces[i++]++;
      spaceRest--;
    }

    let tmp = words[0];
    for (let i = 0; i < spaces.length; i++) {
      tmp += spacesToString(spaces[i]) + words[i + 1];
    }
    return tmp;
  }
}

function constructLastLine(words, maxWidth) {
  let tmp = words.join(" ");

  if (maxWidth > tmp.length) {
    tmp += spacesToString(maxWidth - tmp.length);
  }
  return tmp;
}

function spacesToString(n) {
  let tmp = "";

  for (let i = 0; i < n; i++) {
    tmp += " ";
  }
  return tmp;
}
