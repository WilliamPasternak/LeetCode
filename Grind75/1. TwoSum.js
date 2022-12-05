1. TwoSum.js
/**
// Parameters: nums (array of +/- ints) & target integer (- or +)
// Return: indices of 2 nums that sum up to target integer
// Example: [1,2,3] target 5 return [1,2]
// Pseudo:
    // Find out which 2 nums sum to target
    // Find index of each of those numbers
    // push index to a new array
    // return array
**/    
    

    // Brute Force Time: O(N^2) Space: O(1)
let twoSum = function(nums, target) {
    for(let i = 0; i <= nums.length -2; i++){
        for(let j = i + 1; j <= nums.length -1 ; j++){
            if(nums[i] + nums[j] === target && i != j){
                return [i,j]
            }
        }
    }
    
};

// Refactored Time: O(N) Space: O(N)
function twoSum(numbers, target) {
let numsLookup = {}
for(let i = 0; i <numbers.length; i++){
   if((target - numbers[i]) in numsLookup ){
      return [i , numsLookup[target - numbers[i]] ]
   }
   numsLookup[numbers[i]] = i
}
}