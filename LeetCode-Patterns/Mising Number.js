Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const missingNumber = function(nums) {
  const currentTotal = nums.reduce((acc,cur) => acc + cur)
  const n = nums.length
  const targetTotal = (n**2 + n ) / 2
  return targetTotal - currentTotal  
};


