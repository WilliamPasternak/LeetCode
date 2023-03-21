Two Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the target sum.

// Brute Force - Nested Loops
// Time:  O(n^2)
// Space: O(1)
function twoNumberSum(array,targetSum){
  for(let i = 0; i < array.length - 1; i++){
    const firstNum = array[i]
    for(let j = i + 1; j < array.length; j++){
      const secondNum = array[j]
      if(firstNum + secondNum === targetSum){
        return [firstNum, secondNum]
      }
    }
  }
  return []
}


// Hashtable Approach: 
// Time:  O(N)
// Space: O(N)
function twoNumberSum(array, targetSum) {
  // Create hashtable to track nums seen.
  const numsSeen = {}
  // Iterate over nums array
  for(let num of array){
  // Check if we have seen a number that when added to current num == target
    if(targetSum - num in numsSeen){
        return [num, targetSum - num]
    }
  // Assign current num to numsSeen table.
    numsSeen[num] = true
  }
    return []
  }  

// Sorting Two Pointers
// Time:  O(nlog(n)
// Space: O(1)

function twoNumberSum(array, targetSum) {
    // Sort Array, so we can utilitze 2 pointers and save space
    array.sort((a,b) => a - b)
    // Establish Left & Right Pointers
    let [left,right] = [0,array.length -1]
    while(left < right){
    // if matching numbers found, return them
     if(array[left] + array[right] === targetSum) return [array[left],array[right]]
    // If adding both nums > target, reduce right bound
     else if(array[left] + array[right] > targetSum) right--
    // If adding both nums < target, increase left bound
     else left++
    }
 return []
}

// Tests:
// Sum Found
console.log(twoNumberSum([3,5,-4,8,11,1,-1,6],10),'[-1,11]') 
// Sum not found 
console.log(twoNumberSum([1,2,6], 5),'[]') 
// Repeating Unique
console.log(twoNumberSum([1,2,2], 4),'[2,2]') 
// No repeating
console.log(twoNumberSum([1,2], 4),'[]') 