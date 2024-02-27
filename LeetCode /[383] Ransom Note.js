Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

function canConstruct (ransomNote, magazine) {
    const charCount = {}
    // Count occurances of each char in magazine, store in hashmap
    for (let char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1
    }
    // Iterate over each char from ransomeNote 
    for (let char of ransomNote) {
        // Check if current char did not occur in magazine
        if (!(char in charCount) || charCount[char] <= 0 ) return false
        // If current char did occur in magazine, reduce the count by 1.
        charCount[char]--
    }
    return true
}

// Tests
console.log(canConstruct('a','b'), 'false')
console.log(canConstruct('aa','ab'), 'false')
console.log(canConstruct('aa','aab'), 'true')