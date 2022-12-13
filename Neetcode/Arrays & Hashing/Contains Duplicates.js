// Given an integer array nums, return true if any value appears more than once in the array, and return false if every element is unique.

// Brute Force
// Time: O(N^2) Space: O(1)
let containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length -1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true
            }
        }     
    }
    return false
};


// Time: O(n) Space: O(n)
function containsDuplicate(nums) {
   // use Set to store unique array element 
    let uniqueNums = new Set(nums);
	// If the count of unique numbers is equal to the length of the original array, there are no duplicates.
    return uniqueNums.size !== nums.length;
};



// Time: O(n) Space: O(n)
function containsDuplicate(nums){
   let uniqueNums = new Set()
   for(let num of nums){
      if(uniqueNums.has(num)) return true
      uniqueNums.add(num)
   }   
   return false
}

// Time: O(n) Space: O(n)
function containsDuplicate(nums) {
   const lookup = {}
   for(let num of nums){
      if(lookup[num]) return true
      lookup[num] = true
  }
  return false
};

// Tests:
console.log(containsDuplicate([1,2,3,1]),'true')
console.log(containsDuplicate([1,2,3,4]),'false')
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]),'true')