/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    // convert s to lowercase.
    let string = s.toLowerCase()
    // Establish 2 pointers on end, and work towards each other.
    let [left, right] = [0, string.length - 1]

    while (left < right) {
        let [leftChar, rightChar] = [string[left], string[right]]

        // leftChar is not alphanumeric, increment left
        while (!(leftChar >= 'a' && leftChar <= 'z') && !(leftChar >= '0' && leftChar <= '9')) {
            if (left >= right) return true
            left++
            leftChar = string[left]
        }
        // rightChar is not alphanumeric, decrement right
        while (!(rightChar >= 'a' && rightChar <= 'z') && !(rightChar >= '0' && rightChar <= '9')) {
            if (left >= right) return true
            right--
            rightChar = string[right]
        }
        // Compare 2 characters
        if (leftChar !== rightChar) return false
        else {
            left++
            right--
        }
    }
    return true
}
