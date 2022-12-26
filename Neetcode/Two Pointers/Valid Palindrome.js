A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 
Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s){
    if (s.length <= 1) return true;
    let [left, right] = [0, s.length - 1];
    while (left <= right) {
        // skip non-alphanumeric characters before comparing
      const alphaNumeric = /[a-zA-Z0-9]/
        if (!alphaNumeric.test(s[left])) {
            left++;
        } else if (!alphaNumeric.test(s[right])) {
            right--;
        } else {
        // compare left and right letters
            if (s[left].toLowerCase() != s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
    }
    return true;
};

// Tests:
console.log(isPalindrome("0P") ,  'false')
console.log(isPalindrome("A man, a plan, a canal: Panama") ,  'true')
console.log(isPalindrome("race a car"), 'false')
console.log(isPalindrome(" ") ,  'true')