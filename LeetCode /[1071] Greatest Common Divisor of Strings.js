/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
   // Find the GCD
   let gcd = findGCD(str1.length,str2.length)
   // Compare 2 strings GCD
   if(str1.slice(0,gcd) === str2.slice(0,gcd)){
        return str1.slice(0,gcd)
   }
   else return ""
   
};

function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}