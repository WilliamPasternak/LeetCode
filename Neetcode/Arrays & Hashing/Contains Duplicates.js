/**
 * Challenge: Contains Duplicates
 * Source: https://leetcode.com/problems/contains-duplicate/
 * Description: Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 * /

/**
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.    
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    // Create an object to hold numsSeen
    const numsSeen = {}
    // Iterate over nums array, add each number to numsSeen.
    for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i]
        // If current number exists in numsSeen, duplicate found, return true.
        if(numsSeen[currentNumber]) return true
        numsSeen[currentNumber] = 1
    }
    return false
}

// Tests:
console.log(containsDuplicate([1,2,3,1]),true)
console.log(containsDuplicate([1,2,3,4]),false)
console.log(containsDuplicate([11,1,1,2,2,3,3,3,2,4,2]),true)