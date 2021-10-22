/*
Insert Sorting Algorithm:

Take an unsorted new element in the array, compare it with the already sorted element before, 
insert a new element to the right if the new element is smaller than the sorted element.”


Time Complexity N^2
*/

class InsertSort {
  static sort(arrays) {
    for (var i = 0; i < arrays.length; i++) {
      var insertElement = arrays[i]; //Take unsorted new elements
      var insertPosition = i; //Inserted position
      for (var j = insertPosition - 1; j >= 0; j--) {
        //If the new element is smaller than the sorted element, shifted to the right
        if (insertElement < arrays[j]) {
          arrays[j + 1] = arrays[j];
          insertPosition--;
        }
      }
      arrays[insertPosition] = insertElement; //Insert the new element
    }
  }
} 

//////////////////////testing////////////////////
var scores = [90, 70, 50, 80, 60, 85];
InsertSort.sort(scores);
for (var i = 0; i < scores.length; i++) {
  console.log(scores[i] + ",");
}
