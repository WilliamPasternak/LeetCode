const search = function(nums, target) {
    let left = 0
    let right = nums.length -1
  
while(left <= right){
    let middle = Math.floor(( left + right ) / 2) // Gets middle value
    let guess = nums[middle]
    
if(guess === target){ // If middle number = target, return index of middle
	return middle
}  
if(target > guess){	 // If target is larger than middle, move leftmost bound
	left = middle + 1
}
  else if(target < guess){ // If target is smaller than middle, move rightmost bound
  	right = middle - 1
  }
}
return -1	// If target is not found, return -1
};

