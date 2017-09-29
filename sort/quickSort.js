Array.prototype.quickSort = function() {
  var arr = this;
  if (this.length <= 1) {
    return this;
  }
  var less = [],
    greater = [];

  var pivot = arr.splice(Math.floor(arr.length / 2), 1);

  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  var c = [];

  return c.concat(less.quickSort(), pivot, greater.quickSort());
};

var a = [3, 1, 43, 5, 123, 6, 231, 0];
console.log(a.quickSort());
