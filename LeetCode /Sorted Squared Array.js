Sorted Squared Array

Write a function that takes in a non-empty array of integers that are sorted in ascending 
order and returns a new array of the same length with the squares of the original integers 
also sorted in ascending order.

// Time: O(n) | Space: O(n)
function sortedSquaredArray(array) {
  // Create a new array the same size as original. We are going to build its values.
  const squaredArr = new Array(array.length).fill(0)
  // Establish pointers on both ends of array
  let [left,right] = [0,array.length - 1]
  // Iterate over array, and square values
for(let i = 0; i <= array.length -1 ; i++){
    let leftNum = array[left]**2 
    let rightNum = array[right]**2 
    // Fill the new array L - R and move pointer
    if(leftNum < rightNum){
      squaredArr[left] = leftNum
      left++
    }
    else{
      squaredArr[right] = rightNum
      right--
    }
  }
  return squaredArr;
}



// Time: O(n log n) Space: O(n)

// Built In Methods
// function sortedSquaredArray(array) {
//  return array.map(num => num * num).sort((a,b) => a - b)
// }

// Manually 'map'
// function sortedSquaredArray(array) {
//   const sortedSquares = new Array(array.length).fill(0)

//   for(let i = 0; i < array.length; i++){
//     const value = array[i]
//     sortedSquares[i] = value ** 2
//   }

//   sortedSquares.sort((a,b) => a - b)
//   return sortedSquares
  
// }