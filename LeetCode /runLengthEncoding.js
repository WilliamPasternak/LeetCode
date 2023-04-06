Run Length Encoding

/* 
Write a function that takes in a non-empty string and returns its run-length encoding.
- Run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, 
- rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters.
- So the run "AAA" would be run-length-encoded as "3A"
- To make things more complicated, however, the input string can contain all sorts of special characters, including numbers.
-  And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. 
-  For example, the run "AAAAAAAAAAAA! (12 A s), can't naively be encoded as "12A', since this string can be decoded as either "AAAAAAAAAAAA" or "IAA" .
- Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as "9A3A"
*/


// Time:  O(N): N is the length of input string
// Space: O(N): Encoding Array, is the same length as string






// Refactored
function runLengthEncoding(string) {
  const encoding = [];
  let currentCharacter = string[0];
  let currentCharacterCount = 1;
  
  for (let i = 1; i <= string.length; i++) {
    if (i === string.length || string[i] !== currentCharacter || currentCharacterCount === 9) {
      // Add the count and character to the encoding array
      encoding.push(currentCharacterCount)
      encoding.push(currentCharacter)

      // Reset the current character and count
      currentCharacterCount = 1;
      currentCharacter = string[i];
    } else {
      // Increment the count
      currentCharacterCount++;
    }
  }

  // Join the encoding array into a string and return it
  return encoding.join("");
}



function runLengthEncoding(string) { 
  const encoding = []
  let [left,right] = [0,0]

  // Track currentLetter and currentCount of times it has occured so far.
  let currentChar = string[0] 
  let currentCount = 0
  
  // Iterate over string with 2 pointers
  while(right < string.length){
    // Push count and letter to encoding array, if chars are different OR count is 9
    if(currentCount === 9 || string[left] !== string[right] ){
      encoding.push(currentCount)
      encoding.push(currentChar)
      currentCount = 0

      // If Characters are different, change currentCharacter, move up left pointer
      if(string[left] !== string[right]){
      left = right
      currentChar = string[left]
      }

    }

    // While sequential chars are the same, increase count by 1
  else if(string[left] === string[right]){
     currentCount++
     right++
  }
   
  }
  // Handle the last number and letter
      encoding.push(currentCount)
      encoding.push(currentChar)

  return encoding.join('')
  
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
