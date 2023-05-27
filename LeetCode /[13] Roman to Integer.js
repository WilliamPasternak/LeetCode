13. Roman to Integer
Given a roman numeral as a string (s), convert it to an integer.

function romanToInt(s) {
    const values = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let total = 0;
    
    for(let i = 0; i < s.length; i++) {
        const [currentNum,nextNum] = [values[s[i]] ,values[s[i+1]]]
        if(currentNum < nextNum) total -= currentNum;
        else total += currentNum;
    }
    return total;    
};