/*
Select Sorting Algorithm:

Select the smallest one of the remaining unordered elements in the array, inserting the one that has been sorted before.

maintian a minIndex


Time Complexity N^2
*/

class SelectSort {
  static sort(arrays) {
    var len = arrays.length - 1;
    var minIndex; // Save the index of the selected minimum

    // i is the start index of each of loop
    for (var i = 0; i < len; i++) {
      minIndex = i; //Save the minimum value of each loop as the first element
      var minValue = arrays[minIndex];
      // j is the pointer in the each of loop
      for (var j = i; j < len; j++) {
        // Compare with each element if it is less than the minimum value, exchange the minIndex
        if (minValue > arrays[j + 1]) {
          minValue = arrays[j + 1];
          minIndex = j + 1;
        }
      } //if the minimum index changes, the current minimum is exchanged with the minIndex
      if (i != minIndex) {
        var temp = arrays[i];
        arrays[i] = arrays[minIndex];
        arrays[minIndex] = temp;
      }
    }
  }
} 


//////////////////////testing////////////////////
var scores = [90, 70, 50, 80, 60, 85];
SelectSort.sort(scores);
for (var i = 0; i < scores.length; i++) {
  console.log(scores[i] + ",");
}
