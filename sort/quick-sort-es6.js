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

  partition(arr, low, high) {
    // pivot value - Element at right most position
    pivot = arr[high];
    i = low - 1; // Index of smaller element
    for (j = low; j < high; j++) {
      // If current element is smaller than the pivot, swap the element with pivot
      if (arr[j] < pivot) {
        i++; // increment index of smaller element
        swap(arr[i], arr[j]);
      }
    }
    // put the pivot value to arr[i+1]
    swap(arr[i + 1], arr[high]);
    return i + 1;
  }

  quickSort(array, low, high) {
    if (low > high) {
      return;
    }
    const pivot_index = partition(arr, low, high);
    this.quickSort(array, low, pivot_index - 1); // right quickSort
    this.quickSort(array, ipivot_index + 1, high);
  }
}

//////////////////////testing////////////////////
var scores = [90, 60, 50, 80, 70, 100];
var quickSort = new QuickSort();
quickSort.sort(scores);
for (var i = 0; i < scores.length; i++) {
  console.log(scores[i] + ",");
}
