Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/* Option sort and and compare strings.
* Time O(N * logN) | Space O(N)
*/
function isAnagram (s, t){
    // Edge Cases : Invalid inputs & Incorrect Length
    if (s.length !== t.length) return false;
    // Check if sorted strings are equal.
    return reorder(s) === reorder(t);  
};

function reorder(str){
// Sorts characters inside str
return str.split('').sort().join('');
// alternatively use .sort((a, b) => a.localeCompare(b))
}



/* Hashmap - Frequency Counter
* Time O(N) | Space O(N)
*/
let isAnagram = function(s, t) {
    // Edge Cases : Invalid inputs & Incorrect Length
    if(!s || !t) return false
    if(s.length !== t.length) return false

     // Setup hash table
    let letterCount = {}
    
    // Add each item to hash table or increment if present
    for(let char of s){
        letterCount[char] = ( letterCount[char] || 0 ) + 1
    }
    
    // Check if char of t is present the correct # of times.
    for(char of t){
        if(!letterCount[char]) return false
    // Decrement value if key is present
        letterCount[char] -= 1
    }  
    return true 
};