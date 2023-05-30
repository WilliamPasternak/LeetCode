9. Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
  const str = x.toString();
  let [leftIdx, rightIdx] = [0, str.length -1]
 
  while (leftIdx < rightIdx) {
    const[leftChar,rightChar] = [str[leftIdx], str[rightIdx]]
    if (leftChar !== rightChar) return false;
    else{
        leftIdx++;
        rightIdx--;
    }
  }
  return true;
};