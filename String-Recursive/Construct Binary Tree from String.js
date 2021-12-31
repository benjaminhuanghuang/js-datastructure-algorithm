/*
536. Construct Binary Tree from String


https://leetcode.com/problems/construct-binary-tree-from-string/

https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/


Input: "4(2(3)(1))(6(5))"
*/

/*
  Solution Iterative +  Stack
*/
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree_iterative = function (s) {
  if (s.length == 0) return null;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let temp = i;
    if (s.charAt(i) == ")") {
      stack.pop;
    } else if ((s.charAt[i] >= "0" && s.charAt[i] <= "9") || s.charAt[i] == "-") {
      // start a number
      while (i + 1 < s.length && s.charAt[i + 1] >= "0" && s.charAt[i + 1] <= "9") {
        i++;
      }
      const curr = new TreNode(parsInt(s.substring(temp, i)));
      if (stack.length > 0) {
        const parent = stack[stack.length - 1];
        if (!parent.left) parent.left = curr;
        else parent.right = curr;
      }
      stack.push(curr);
    }
  }

  return stack.top();
};

/*
  Solution Recursive
  1. 先找出根结点值
  2. 找第一个左括号的位置，如果找不到，说明当前字符串都是数字，直接转化为整型，然后新建结点返回即可
*/
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree_recursive = function (s) {
  if (s.length === 0) return null;
  // find the index of first (
  let indexOfLeft = s.findIndex("(");
  const val = indexOfLeft === -1 ? parseInt(s) : parseInt(s.substring(0, indexOfLeft));
  const root = new TreeNode(val);
  // if there is no ()
  if (indexOfLeft == -1) return root;

  let indexOfRight = findClosing(s, indexOfLeft);
  root.left = str2tree(s.substring(indexOfLeft + 1, indexOfRight - 1));

  indexOfLeft = indexOfRight + 1;
  indexOfRight = findClosing(indexOfLeft);
  root.right = str2tree(s.substring(indexOfLeft + 1, indexOfRight - 1));

  return cur;
};
// find Index Of Right Parenthese
function findClosing(s, start) {
  let level = 0,
    i = 0;
  for (i = start; i < s.length(); i++) {
    if (s.charAt(i) == "(") level++;
    else if (s.charAt(i) == ")") {
      level--;
      if (level == 0) break;
    }
  }
  return i;
}

const input = "4(2(3)(1))(6(5))";
const res = str2tree_recursive();
console.log(input);
