Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = arr => {
const nums = {}
   for(let num of arr){
      nums[num] = (nums[num] || 0 ) + 1
}
  for(num in nums){
    if(nums[num] > arr.length / 2) return num	
}
}