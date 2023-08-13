27. Remove Element
https://leetcode.com/problems/remove-element/

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

function removeElement(nums, val) {
    // Initialize left and right pointers
    let [left, right] = [0, nums.length - 1]; 
    while (left <= right) { 
        // Check if the value at the left pointer is equal to the target value
        if (nums[left] === val) { 
        // If it is, replace the value at left with the value at right
            nums[left] = nums[right]; 
        // Move the right pointer one step to the left
            right--; 
        }
        else {
        // If the left value !== val, move the left pointer one step to the right
            left++; 
        }
    }
    // Return the position of the left pointer as it indicates the new length of the array
    return left; 
};
