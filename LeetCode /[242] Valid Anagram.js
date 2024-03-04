Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram (s, t) {
    if (s.length !== t.length) return false
    const sCharCount = {}
    // count letters in s
    for (let char of s){
        sCharCount[char] = (sCharCount[char] || 0) + 1
    }
    // Check if chars in t are present in sCharCount
    for (let char of t){
        if (!(char in sCharCount) || sCharCount[char] < 1){
           return false
       }
        // if char was seen in 's' decrement its count
            sCharCount[char]--
    }
    return true
}