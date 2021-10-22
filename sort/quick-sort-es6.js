/*

Quick Sort Algorithm:

Divide the array into 2 subarrays, then call yourself recursively, sort the subarrays quickly, and continue to the end.”



No extra space
*/

class QuickSort {
  sort(array) {
    if (array.length > 0) {
      this.quickSort(array, 0, array.length - 1);
    }
  }

  quickSort(array, low, high) {
    if (low > high) {
      return;
    }
    var i = low;
    var j = high;
    var threshold = array[low]; // Alternately scanned from both ends of the list
    while (i < j) {
      // Find the first position less than threshold from right to left
      while (i < j && array[j] > threshold) {
        j--;
      } //Replace the low with a smaller number than the threshold
      if (i < j) array[i++] = array[j]; // Find the first position greater than threshold from left to right
      while (i < j && array[i] <= threshold) {
        i++;
      }

      //Replace the high with a number larger than the threshold
      if (i < j) array[j--] = array[i];
    }
    array[i] = threshold; // left quickSort
    this.quickSort(array, low, i - 1); // right quickSort
    this.quickSort(array, i + 1, high);
  }
} 


//////////////////////testing////////////////////
var scores = [90, 60, 50, 80, 70, 100];
var quickSort = new QuickSort();
quickSort.sort(scores);
for (var i = 0; i < scores.length; i++) {
  console.log(scores[i] + ",");
}
