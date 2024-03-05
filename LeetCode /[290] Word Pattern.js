/**
 * Function to check if a given pattern follows the same sequence in a string.
 * @param {string} pattern - The pattern to match.
 * @param {string} s - The string to search for the pattern.
 * @returns {boolean} - True if the pattern follows the same sequence, false otherwise.
 */
function wordPattern(pattern, s) {
    // Split the string into individual words
    const words = s.split(' ')

    // Check if the length of pattern and words are not equal
    if (pattern.length !== words.length) return false

    // Create a Map to hold the mapping of keys to values
    const keyMap = new Map()
    // Create a Map to hold the mapping of values to keys
    const valueMap = new Map()

    // Iterate over each character in the pattern
    for (let i = 0; i < pattern.length; i++) {
        const key = pattern[i] 
        const value = words[i] 

        // If the key or value is already seen
        if (keyMap.has(key) || valueMap.has(value)) {
            // Check if the key maps to a different value or if the value maps to a different key
            if (keyMap.get(key) !== value) return false
            if (valueMap.get(value) !== key) return false
        } else {
            // If the key or value is not seen, add them to their respective maps
            keyMap.set(key, value)
            valueMap.set(value, key)
        }
    }
    // If we reach here without any mismatches, return true
    return true
}