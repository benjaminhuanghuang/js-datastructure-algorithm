/*
1600. Throne Inheritance
https://leetcode.com/problems/throne-inheritance/

[Google]


*/

/*
  DFS, pre-order

*/
/**
 * @param {string} kingName
 */
/**
 * @param {string} kingName
 */
var ThroneInheritance = function (kingName) {
  this.king = kingName;
  this.passaway = new Set();
  this.graph = new Map();
};

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function (parentName, childName) {
  if (!this.graph.has(parentName)) {
    this.graph.set(parentName, []);
  }
  this.graph.get(parentName).push(childName);
};

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function (name) {
  this.passaway.add(name);
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function () {
  const ans = [];
  const dfs = (king) => {
    if (!this.passaway.has(king)) {
      ans.push(king);
    }
    if (this.graph.has(king)) {
      for (const child of this.graph.get(king)) {
        dfs(child);
      }
    }
  };
  dfs(this.king);
  return ans;
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
