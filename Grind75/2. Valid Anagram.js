Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

let isAnagram = function(s, t) {
    // Edge Cases : Invalid inputs & Incorrect Length
    if(!s || !t) return false
    if(s.length !== t.length) return false

     // Setup hash table
    let letterCount = {}
    
    // Fill hash table
    for(let char of s){
        letterCount[char] = ( letterCount[char] || 0 ) + 1
    }
    
    // Compare values from t to hash table by checking key
    for(char of t){
        if(!letterCount[char]) return false
    // Decrement value if key is present
        letterCount[char] -= 1
    }  
    return true 
};