/*
726. Number of Atoms


https://leetcode.com/problems/number-of-atoms/

Input: formula = "H2O"
Output: "H2O"


Input: formula = "Mg(OH)2"
Output: "H2MgO2"
*/

/* Solution: ----------------------------------------------------
https://zxi.mytechroad.com/blog/string/leetcode-726-number-of-atoms/

如果没有()， 只需要两个函数 getName()， getCount()就可以解决
出现()就递归调用， 调用结果和当前层merge
Time complexity: O(n)  
Space complexity: O(n)
------------------------------------------------------*/
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  // the global index
  let i = 0;

  const getName = (s) => {
    let name = "";
    while (isAlpha(s, i) && i < s.length && (name.length === 0 || isLower(s, i))) {
      // is letter and only the first letter is upper case
      name += s.charAt(i++);
    }
    return name;
  };
  const getCount = (s) => {
    let str = "";
    while (isDigig(s, i) && i < s.length) {
      // is letter and only the first letter is upper case
      str += s.charAt(i++);
    }
    return str.length === 0 ? 1 : parseInt(str);
  };

  const countAtoms = () => {
    const counts = new Map();
    while (i < formula.length) {
      if (formula.charAt(i) === "(") {
        i++;
        const atomsCount = countAtoms(formula, i);
        const count = getCount(formula, i);
        // (H20)2
        for (const name of atomsCount.keys()) {
          if (counts.has(name)) {
            counts.set(name, counts.get(name) + atomsCount.get(name) * count);
          } else {
            counts.set(name, atomsCount.get(name) * count);
          }
        }
      } else if (formula.charAt(i) === ")") {
        i++;
        return counts;
      } else {
        const name = getName(formula, i);
        const count = getCount(formula, i);
        if (counts.has(name)) {
          counts.set(name, counts.get(name) + count);
        } else {
          counts.set(name, count);
        }
      }
    }
    return counts;
  };

  // main
  let ans = "";
  const counts = countAtoms(formula); // Atom->count
  let keys = [...counts.keys()];
  keys.sort();
  for (k of keys) {
    ans += k;
    const count = counts.get(k);
    if (count > 1) {
      ans += count;
    }
  }
  return ans;
};

function isAlpha(s, i) {
  return isLower(s, i) || isUpper(s, i);
}

function isLower(s, i) {
  return s.charCodeAt(i) >= "a".charCodeAt(0) && s.charCodeAt(i) <= "z".charCodeAt(0);
}

function isUpper(s, i) {
  return s.charCodeAt(i) >= "A".charCodeAt(0) && s.charCodeAt(i) <= "Z".charCodeAt(0);
}

function isDigig(s, i) {
  return s.charCodeAt(i) >= "0".charCodeAt(0) && s.charCodeAt(i) <= "9".charCodeAt(0);
}
