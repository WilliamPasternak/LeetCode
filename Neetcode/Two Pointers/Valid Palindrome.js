/**
 * Determines whether or not a string is a valid palindrome.
 * @param {string} s - String to be tested
 * @return {boolean} - Indicating if input is a Palindrome (not including non-alphanumeric characters present)
 */
// Solution A: Filter string and compare against reversed string using built in methods.
function isPalindrome(s) {
    if (!s.length) return true
    // Filter input string (s) to only include valid alphanumeric lowercase characters.
    const validCharacters = s.toLowerCase().split('').filter((char) => 
                                                char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z' || char >= '0' && char <= '9').join('')
    // Check if input string's validCharacters are the same forwards and backwards.
    return validCharacters === validCharacters.split('').reverse().join('')
}

//Solution B: 2 Pointers
function isPalindrome(s){
  const isAlphaNumeric = c => (c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z') || c >= '0' && c <= '9'
  // Establish 2 pointers
  let [left,right] = [0, s.length - 1]
  let leftCharInvalid, rightCharInvalid, charsMatch = false;
  
  while (left < right) {
    // Determine if current characters are valid
    const [currentLeftChar,currentRightChar] = [s[left],s[right]]
    leftCharInvalid = !isAlphaNumeric(currentLeftChar)
    rightCharInvalid = !isAlphaNumeric(currentRightChar)

    if (leftCharInvalid){ 
        left++ 
        continue 
    }
    if (rightCharInvalid){
        right-- 
        continue
    }
    // Check if current characters match
    charsMatch = currentLeftChar.toLowerCase() === currentRightChar.toLowerCase()
    // If they don't match, return false.
    if (!charsMatch) return false
    // Move left pointer forward, and right pointer backward.
    left++
    right--
  }
  return true
}
// Tests:
console.log(isPalindrome("A man, a plan, a canal: Panama"),true)
console.log(isPalindrome("race a car"),false)
console.log(isPalindrome(" "),true)
