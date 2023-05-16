Insertion Sort

Time: O(N^2)
Space: O(1)

function insertionSort(array) {
  for(let i = 1; i <array.length; i++){
    let j = i;
    while (j > 0 && array[j] < array[j-1]){
      swap(j,j-1,array)
      j--
    }
  }
  return array
}

// Helper function to swap values
function swap(i,j,array){
  [array[j],array[i]] = [array[i],array[j]]
}
