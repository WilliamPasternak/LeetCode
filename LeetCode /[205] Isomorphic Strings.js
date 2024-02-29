/**
 * Determine if two strings are isomorphic.
 * Isomorphic strings have the same length and a one-to-one character mapping
 * from string 's' to string 't'.
 * 
 * @param {string} s - The first input string.
 * @param {string} t - The second input string.
 * @return {boolean} - True if strings are isomorphic, false otherwise.
 */

function isIsomorphic(s, t) {
    // Map characters from s to corresponding characters in t
    const sToTMap = {}
    // Maps characters from t to corresponding characters in s
    const tToSMap = {}

    // Iterate over each character in s
    for (let i = 0; i < s.length; i++) {
        // Get the current characters from both strings
        const [charS, charT] = [s[i], t[i]]

        // Check if the current character in s has already been mapped
        const charSAlreadyMapped = sToTMap[charS] !== undefined

        // Check if the current character in t has already been mapped
        const charTAlreadyMapped = tToSMap[charT] !== undefined

        // Check if mappings are not isomorphic
        if ((charSAlreadyMapped && sToTMap[charS] !== charT) ||
            (charTAlreadyMapped && tToSMap[charT] !== charS)) {
            return false 
        }

        // Map the corresponding characters from s to t and vice versa
        sToTMap[charS] = charT
        tToSMap[charT] = charS
    }

    // Strings are isomorphic
    return true
}