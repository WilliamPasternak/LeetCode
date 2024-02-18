/**
 * Challenge: 27. Remove Element
 * Source: https://leetcode.com/problems/remove-element
 * Description: Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * 
/**
 * Removes all occurrences of a specified value from an array.
 * Modifies the array in place and returns the length of the resulting array.
 *
 * @param {number[]} nums - The array from which to remove elements.
 * @param {number} val - The value to remove from the array.
 * @returns {number} - The length of the resulting array after removal.
 */
function removeElement(nums, val) {
    let [left, right] = [0, 0]
    while (right < nums.length) {
        if (nums[left] === val) {
            // Swap the elements
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
        }
        // Increment both pointers if the left element is not equal to val
        if (nums[left] !== val) {
            left++
            right++
        } else {
            // Increment the right pointer if the right element is equal to val
            right++
        }
    }
    return left
}