function permutate(str) {
  var array = str.split("");

  const dfs = (array, pre = []) => {
    debugger;
    if (array.length == 1) {
      return [pre.concat(array).join("")];
    }
    let res = [];
    for (let index = 0; index < array.length; index++) {
      var first = array.pop();
      res = res.concat(loop(array, [...pre, first]));
      array.unshift(first);
    }
    return res;
  };
  return Array.from(new Set(loop(array)));
}
