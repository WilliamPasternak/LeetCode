345. Reverse Vowels of a String
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


var reverseVowels = function(s) {
    // Create a new array to hold vowels.
    const vowels = []
    // Create dictionary of valid vowels for this function.
    const legalVowels = {'a':'a','e': 'e','i':'i','o':'o','u':'u','A':'A','E': 'E','I':'I','O':'O','U':'U'}
  // Split original string to array so we can modify.
    const sAsArray = s.split('')
    // Fill the vowels array with 'legal vowels'
    for (let i = 0; i < s.length; i++){
        const currentLetter = s[i]
        if(currentLetter in legalVowels){
            // if current letter is vowel, push to vowels array
            vowels.push(currentLetter)
        }
    }
    // iterate through original array, and swap out vowels
    for(let i = 0; i < sAsArray.length; i++){
        const currentLetter = sAsArray[i]
        //if current letter is not vowel, do nothing
        // if current letter is a vowel, pop vowel off vowels array, and insert.
        if(currentLetter in legalVowels){
            let lastVowel = vowels.pop()
            sAsArray[i] = lastVowel
        }
    }
    return sAsArray.join('')
       
};