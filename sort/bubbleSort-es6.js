/*
Bubble Sorting Algorithm:

the first two elements are compared, if the previous element is larger than the latter element, 
the position is swapped. 

Repeat this process, until sorting is completed.


Time Complexity: N^2
*/

class BubbleSort {
  static sort(arrays) {
    for (var i = 0; i < arrays.length - 1; i++) {
      for (var j = 0; j < arrays.length - 1; j++) {
        //swap
        if (arrays[j] > arrays[j + 1]) {
          var flag = arrays[j];
          arrays[j] = arrays[j + 1];
          arrays[j + 1] = flag;
        }
      }
    }
  }
} 


//////////////////////testing////////////////////
var scores = [90, 70, 50, 80, 60, 85];
BubbleSort.sort(scores);
for (var i = 0; i < scores.length; i++) {
  document.write(scores[i] + ",");
}
