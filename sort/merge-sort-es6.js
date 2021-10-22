/*
The data of the first half and the second half are sorted, and the two ordered sub-list are merged into one ordered list, 

which continue to recursive to the end.
*/

class MergeSort {
  sort(array) {
    var temp = new Array(array.length);
    this.mergeSort(array, temp, 0, array.length - 1);
  }

  mergeSort(array, temp, left, right) {
    if (left < right) {
      var center = parseInt((left + right) / 2);
      this.mergeSort(array, temp, left, center); // Left merge sort
      this.mergeSort(array, temp, center + 1, right); // Right merge sort

      this.merge(array, temp, left, center + 1, right); // Merge two ordered arrays
    }
  }

  /**
    Combine two ordered list into an ordered list
    
    temp : Temporary array
    
    left :    Start the subscript on the left
    
    right :  Start the subscript on the right
         
    rightEndIndex : End subscript on the right
  */
  merge(array, temp, left, right, rightEndIndex) {
    var leftEndIndex = right - 1; // End subscript on the left
    var tempIndex = left; // Starting from the left count
    var elementNumber = rightEndIndex - left + 1;

    while (left <= leftEndIndex && right <= rightEndIndex) {
      if (array[left] <= array[right]) temp[tempIndex++] = array[left++];
      else temp[tempIndex++] = array[right++];
    }
    while (left <= leftEndIndex) {
      // If there is element on the left
      temp[tempIndex++] = array[left++];
    }
    while (right <= rightEndIndex) {
      // If there is element on the right
      temp[tempIndex++] = array[right++];
    } 
    
    // Copy temp to array
    for (var i = 0; i < elementNumber; i++) {
      array[rightEndIndex] = temp[rightEndIndex];
      rightEndIndex--;
    }
  }
}

/*

*/
var scores = [50, 65, 99, 87, 74, 63, 76, 100, 92];
var mergeSort = new MergeSort();
mergeSort.sort(scores);
for (var i = 0; i < scores.length; i++) {
  document.write(scores[i] + ",");
}
