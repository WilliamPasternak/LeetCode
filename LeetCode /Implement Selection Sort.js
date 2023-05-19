Implement Selection Sort

/*
Thought process: We will have 2 sublists, a sorted section, and unsorted section.
In the begining everything is unsorted.
We look for the smallest value, after checking all items, move smallest to front.
Continue and repeat for remaining items
*/

// Time Complexity: O(N^2)
// Space Complexity: O(1)
function selectionSort(array) {
  let startIdx = 0
  while(startIdx < array.length - 1){
    let smallestIdx = startIdx
    for( let i = startIdx + 1; i < array.length; i++){
      if (array[smallestIdx] > array[i]) smallestIdx = i 
    }
     swap(startIdx,smallestIdx,array)
     startIdx++
  }
 return array
}

function swap(i,j,arr){
  [arr[i],arr[j]] = [arr[j],arr[i]]
}