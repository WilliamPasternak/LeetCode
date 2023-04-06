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

function runLengthEncoding(string) { 
  const encoding = []
  let [left,right] = [0,0]

  // Track currentLetter and currentCount of times it has occured so far.
  let currentLetter = string[0] 
  let currentCount = 0
  
  // Iterate over string with 2 pointers
  while(right < string.length){
    // Push count and letter to encoding array, if chars are different OR count is 9
    if(currentCount === 9 || string[left] !== string[right] ){
      encoding.push(currentCount)
      encoding.push(currentLetter)
      currentCount = 0

      // If Characters are different, change current Character, move up left pointer
      if(string[left] !== string[right]){
      left = right
      currentLetter = string[left]
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
      encoding.push(currentLetter)

  return encoding.join('')
  
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
