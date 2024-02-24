/**
 * @param {string} s
 * @return {number}
 */

 // Time Best Case: O(N) Space: O(1)
function romanToInt (s) {
// create a variable to track the total value of numbers seen so far.
    let numeralValue = 0
// Iterate over entire string
for(let i = 0; i < s.length; i++) {
    // keep track of current character, nextCharacter for comparison
    let [currentNumeral, nextNumeral] = [s[i],s[i + 1]]
    // Check situations in which RN can be negative, determine value, add to numeralValue.
    if(currentNumeral === 'I' && nextNumeral === 'V') {
        numeralValue += 4
        i++
    }
    else if(currentNumeral === 'I' && nextNumeral === 'X') {
        numeralValue += 9
        i++
    }
     else if(currentNumeral === 'X' && nextNumeral === 'L') {
        numeralValue += 40
        i++
    }
     else if(currentNumeral === 'X' && nextNumeral === 'C') {
        numeralValue += 90
        i++
    }
    else if(currentNumeral === 'C' && nextNumeral === 'D') {
        numeralValue += 400
        i++
    }
    else if(currentNumeral === 'C' && nextNumeral === 'M') {
        numeralValue += 900
        i++
    }
    else {
        if(currentNumeral === 'I') numeralValue+= 1
        else if(currentNumeral === 'V') numeralValue+= 5
        else if(currentNumeral === 'X') numeralValue+= 10
        else if(currentNumeral === 'L') numeralValue+= 50
        else if(currentNumeral === 'C') numeralValue+= 100
        else if(currentNumeral === 'D') numeralValue+= 500
        else if(currentNumeral === 'M') numeralValue+= 1000
    }
}
// After iteratating over string, return integer.
return numeralValue
}

// Tests:
console.log(romanToInt ("III") , 3)
console.log(romanToInt ("LVIII") , 58)
console.log(romanToInt ("LVIII") , 58)
console.log(romanToInt ("MCMXCIV") , 1994)