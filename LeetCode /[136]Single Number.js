136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.


function singleNumber(nums){
// create a hashtable
const numCount = {}
// iterate through array, count occurances
for(let num of nums){
   numCount[num] = numCount[num] + 1 || 1
}
//  iterate through object if object[key] does not = 2 return
  for(let num in numCount){
   if(numCount[num] !== 2) return num
}
};
