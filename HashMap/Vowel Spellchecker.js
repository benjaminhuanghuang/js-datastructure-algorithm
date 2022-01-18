/*
966. Vowel Spellchecker

Medium

https://leetcode.com/problems/vowel-spellchecker/

给了一个单词字典，给出了一堆要查询的词，要返回查询结果。查询的功能如下：

    如果字典里有现在的单词，就直接返回；
    如果不满足1，那么判断能不能更改要查询单词的某些大小写使得结果在字典中，如果字典里多个满足条件的，就返回第一个；
    如果不满足2，那么判断能不能替换要查询单词的元音字符成其他的字符使得结果在字典中，如果字典里多个满足条件的，就返回第一个；
    如果不满足4，返回查询的结果是空字符串。
*/

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  const originSet = new Set(wordlist);
  const lowercaseMap = new Map();
  const novowelMap = new Map();

  for (const word of wordlist) {
    const lowered = word.toLowerCase();
    if (!lowercaseMap.has(lowered)) {
      lowercaseMap.set(lowered, word);
    }

    const novoweled = lowered.replace(/[aiueo]/g, "_");
    if (!novowelMap.has(novoweled)) {
      novowelMap.set(novoweled, word);
    }
  }

  return queries.map((query) => {
    if (originSet.has(query)) return query;
    const lowered = query.toLowerCase();
    if (lowercaseMap.has(lowered)) {
      return lowercaseMap.get(lowered);
    }

    const novoweled = lowered.replace(/[aiueo]/g, "_");
    if (novowelMap.has(novoweled)) {
      return novowelMap.get(novoweled);
    }
    return "";
  });
};
