const search = function(nums, target) {
    let left = 0
    let right = nums.length -1
  
while(left <= right){
    let middle = Math.floor(( left + right ) / 2)
    let guess = nums[middle]
    
if(guess === target){
	return middle
}  
if(target > guess){
	left = middle + 1
}
  else if(target < guess){
  	right = middle - 1
  }
}
return -1
};