283. Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

let moveZeroes = function (nums) {
    let [left,right] = [0,1]

    while (right <= nums.length - 1) {
        // Move pointers until left pointer finds a zero.
        if (nums[left] !== 0) {
            left++
            right++
        } else {
        // If left is a zero, and right number is not zero, swap them
            if (nums[right] !== 0) {
                [nums[left], nums[right]] = [nums[right], nums[left]]
                left++
            }
            right++
        }
    }
}