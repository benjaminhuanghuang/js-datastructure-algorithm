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

      this.merge(array, temp, left, right); // Merge two ordered arrays
    }
  }

  /**
    Combine two ordered list into an ordered list
    
    temp : Temporary array
  */
  merge(array, temp, start, end) {
    let middle = left +Number.floor((right - left )/2);
    
    let leftIndex = start;
    let rightIndex = middle+1;
      
    var tempIndex = left; // Starting from the left count
  
    while (leftIndex <= middle && rightIndex <= end) {
      if (array[leftIndex] <= array[rightIndex]) {
        temp[tempIndex++] = array[left++];
      }
      else {
        temp[tempIndex++] = array[right++];
      }
    }
    while (leftIndex <= middle) {
      // If there is element on the left
      temp[tempIndex++] = array[leftIndex++];
    }
    while (rightIndex <= end) {
      // If there is element on the right
      temp[tempIndex++] = array[rightIndex++];
    } 
    
    // Copy temp to array
    for (var i = start; i <= end; i++) {
      array[i] = temp[i];
    }
  }
}

/*

*/
var scores = [50, 65, 99, 87, 74, 63, 76, 100, 92];
var mergeSort = new MergeSort();
mergeSort.sort(scores);
for (var i = 0; i < scores.length; i++) {
  console.log(scores[i] + ",");
}
