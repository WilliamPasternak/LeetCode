1207. Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // create a hashmap to hold seen numbers and count
    const numCount = {}
    // iterate over array and fill out hashmap
    for (let i = 0; i < arr.length; i++){
        const currentNum = arr[i]
        // If number already in numCount, increase count
        if (currentNum in numCount){
            numCount[currentNum]++
        // if number not in numCount, add it, and set its value to 1.
        } else {
            numCount[currentNum] = 1
        }
    }
    // create a second hashmap of occurances 
      const occurances = {}
      for(let num in numCount){
        const count = numCount[num]
        // If we have seen this number before, it is not unique.
        if(count in occurances){
            return false
        // if we have not seen this number yet, add it to occurances hashmap.
        } else{
            occurances[count] = true
        }
        
      }
    // If we reach here, we did not have an early exit meaning no values have the same # of occurances.
    return true
};