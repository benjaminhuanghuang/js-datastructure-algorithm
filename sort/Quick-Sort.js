/*
  
*/
// quick sort
/**
 * @param A an integer array
 * @return void
 */
function quickSort(A, start, end) {
  if (start >= end) {
    return;
  }

  let left = start,
    right = end;
  // key point 1: pivot is the value, not the index
  let pivot = A[(start + end) / 2];

  // key point 2: every time you compare left & right, it should be
  // left <= right not left < right
  while (left <= right) {
    while (left <= right && A[left] < pivot) {
      left++;
    }
    while (left <= right && A[right] > pivot) {
      right--;
    }
    if (left <= right) {
      const temp = A[left];
      A[left] = A[right];
      A[right] = temp;

      left++;
      right--;
    }
  }

  quickSort(A, start, right);
  quickSort(A, left, end);
}

quickSort(A, 0, A.length - 1);
