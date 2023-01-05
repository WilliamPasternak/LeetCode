
Find Smallest Letter Greater Than Target

// Linear Search
var nextGreatestLetter = function(letters, target) {
    for(let char of letters){
        if(char > target) return char
    }
    return letters[0]
};

// Binary Search
var nextGreatestLetter = function(letters, target) {
    let [left,right]= [0, letters.length];
    
    if (letters[letters.length - 1] < target) {  
        return letters[0]; 
    }
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (letters[mid] <= target && letters[mid + 1] > target) {
            return letters[mid + 1];
        } else if (letters[mid] > target) {
            right = mid;
        } else {
            left = mid;
        }
    }
    
    return letters[0];
};



// Tests:
console.log(nextGreatestLetter(["c","f","j"],'a'),'c')
console.log(nextGreatestLetter(["c","f","j"],'c'),'f')
console.log(nextGreatestLetter(["x","x","y","y"],'z'),'x')
