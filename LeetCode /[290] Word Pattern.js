/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern (pattern, s) {
    // split s into individual words
    let words = s.split(' ')
    // create a map to hold character-pattern pairs
    const map = {}
    // Iterate over the pattern and words
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i]
        const word = words[i]
         // If char has not been seen before, add it to the map
        if(!(char in map)) {
            map[char] = word
        }
        // If char has been seen before but with a different word, return false
        else if (map[char] !== word) {
            return false
        }
    }    
         // If we reach the end without any mismatches, return true
        return true
}