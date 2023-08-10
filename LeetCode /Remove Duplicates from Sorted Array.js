Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // establish 2 pointers
    let [left,right] = [0,1]
    // Iterate over each number in arr
    while(right < nums.length){
        // If numbers are the same, move right pointer forward
        if(nums[left] === nums[right]){
            right++
        }
    // If numbers are different, move the Right value to the current place in arr
        else if (nums[left] !== nums[right]){
            left++
            nums[left] = nums[right]
        }
    }
   
   return left + 1


};