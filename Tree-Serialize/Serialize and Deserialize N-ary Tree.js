/*
428. Serialize and Deserialize N-ary Tree

https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/
https://jasonyangshadow.github.io/posts/serialize-and-deserialize-nary-tree/
*/

class Codec {
  constructor() {}

  serialize(root) {
    if (!root) return "";

    let result = [];
    // preorder
    function helper(node) {
      if (!node) {
        reutrn;
      }
      result.push(node.val);
      if (node.children.length > 0) {
        result.push(node.children.length);
        for (let i = 0; i < node.children.length; i++) {
          helper(node.children[i]);
        }
      } else {
        result.push(0);
      }
    }

    helper(root);

    return result.join(",");
  }

  deserialize(data) {
    let index = 0;
    let dataArr = data.splic(",");

    function helper(result) {
      if (result.length == 0) {
        return;
      }

      const val = result[index];
      index++;
      const size = result[index];
      index++;

      const root = new Node(val, []);
      for (let i = 0; i < size; i++) {
        root.children.push(helper(result));
      }
      return root;
    }

    return helper(dataArr);
  }
}
