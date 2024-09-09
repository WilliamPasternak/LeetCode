643. Maximum Average Subarray I

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000

var findMaxAverage = function(nums, k) {
    // Calculate the initial window sum for the first 'k' elements
    let currentSum = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0)
    let maxSum = currentSum
    
    // Slide the window across the array
    for (let i = k; i < nums.length; i++) {
        currentSum = currentSum - nums[i - k] + nums[i]
        maxSum = Math.max(maxSum, currentSum)
    }
    // Return the maximum average
    return maxSum / k
};