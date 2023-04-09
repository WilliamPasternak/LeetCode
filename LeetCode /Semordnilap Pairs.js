Semordnilap
Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.
A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other. For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and
"semordnilap"
The order of the returned pairs and the order of the strings within each pair does not matter.

// Brute Force
// function semordnilap(words) {
//   const pairs = []

//   for(let i = 0; i < words.length; i++){
//     for(let j = i + 1; j < words.length; j++){
//       const firstWord = words[i]
//       const secondWord = words[j]
//       const secondWordReversed = words[j].split('').reverse().join('')
//       if(firstWord === secondWordReversed){
//         const pair = []
//         pair.push(firstWord,secondWord)
//         pairs.push(pair)
//       }
//     }
//   }

//   return pairs;
// }

function semordnilap(words) {
  const pairs = {};
  const seen = new Set();
  for (const word of words) {
    const reversed = word.split('').reverse().join('');
    if (seen.has(reversed)){
      pairs[word] = reversed;
    }
    seen.add(word);
  }
    return Object.entries(pairs);
}