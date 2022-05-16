// Given an integer array nums, return true if any value appears more than once in the array, and return false if every element is unique.

function containsDuplicate(nums) {
   // use Set to store unique array element 
    let uniqueNums = new Set(nums);
	// If the count of unique numbers is equal to the length of the original array, there are no duplicates.
    return uniqueNums.size !== nums.length;
};