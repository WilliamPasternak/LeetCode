2215. Find the Difference of Two Arrays
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const [uniqueTo1, uniqueTo2]  = [[],[]]
    const [seenInNums1, seenInNums2] = [{},{}]

// Fill object with unique numbers from 1
    for (let i = 0; i < nums1.length; i++){
        const currentNum = nums1[i]
        seenInNums1[currentNum] = true
    }
    // Fill object with unique numbers from 2
    for (let i = 0; i < nums2.length; i++){
        const currentNum = nums2[i]
        seenInNums2[currentNum] = true
    }
// Iterate over unique items in 1 to see if they are in 2. If not, push to unique to 1
    for(let num in seenInNums1){
        if(!(num in seenInNums2)){
            uniqueTo1.push(num)
        }
    }
// Iterate over unique items in 2 to see if they are in 1. If not, push to unique to 2
    for(let num in seenInNums2){
        if(!(num in seenInNums1)){
            uniqueTo2.push(num)
        }
    }

return [uniqueTo1,uniqueTo2]
};