/*

Binary Heap Sorting:

It must be a complete binary tree, which means that we fill up all of the nodes on the level we are on before adding another level.

The value of the non-terminal node in the binary tree is not greater than the value of its left and right child nodes.
 
Small top heap : ki <= k2i and ki <= k2i+1
Big top heap :ki >= k2i and ki >= k2i+1

current node subscript = i
Parent node subscript = (i-1)/2
Left subnode subscript = 2*i+1
Right subnode subscript = 2*i+2
 

Heap sorting process:
1. Build a heap
2. After outputting the top element of the heap, adjust from top to bottom, compare the top element with the root node of its left and right subtrees, and swap the smallest element to the top of the heap; then adjust continuously until the leaf nodes to get new heap.
   To remove the largest item we ’ll take the top node of the tree (index = 0) and will move it to the end (end = arr.length-index-1) of the array.

*/

class HeapSort {
  constructor() {
    this.array = [];
  } 
  
  //Initialize the heap
  createHeap(array) {
    this.array = array; // Build a heap, (array.length - 1) / 2 scan half of the nodes with child nodes
    // (array.length - 1) / 2 is the index of the last non-leaf node
    // 0 is the first node with has children       
    for (var i = (array.length - 1) / 2; i >= 0; i--) {
        debugger
      this.heapify(i, array.length - 1);
    }
  } 
  
  //Adjustment heap
  heapify(currentIndex, maxIndex) {
    let largest = currentIndex;
    
    const left = 2* currentIndex + 1;
    const right = 2* currentIndex + 2;
    
    if(left <= maxIndex && this.array[left] > this.array[largest]){
        largest = left;
    }

    if(right <= maxIndex && this.array[right] > this.array[largest]){
        largest = right;
    }

    if(largest != currentIndex){
        this.swap(largest, currentIndex);
        this.heapify(largest, maxIndex);
    }
  }

  heapSort() {
    for (var i = this.array.length - 1; i >0; i--) {
      this.swap(i, 0);
      this.heapify(0, i - 1);
    }
  }

  swap(i, j) {
    var temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }
} 


//////////////////////testing////////////////////
var heapSort = new HeapSort();
var scores = [10, 90, 20, 80, 30, 70, 40, 60, 50];
console.log("Before building a heap :", scores);

heapSort.createHeap(scores);
console.log("After building a heap :", scores);

heapSort.heapSort();
console.log("After heap sorting : <br>", scores);

