const fs = require('fs')
const messageFilePath = 'messageFile.txt'

/**
 * Decodes a message from a file containing lines with numbers followed by words.
 * @param {string} messageFile - The path to the file containing the message.
 * @returns {string} The decoded message formed by selecting words at the end of each pyramid's line.
 */

function decode(messageFile) {
 // Read the content of the file
const lines = fs.readFileSync(messageFile, 'utf-8').split('\n')

// Sorting the array by prefix number
const sortedLines = lines.sort(sortByPrefix)

// Extract the words in sorted order
const sortedWords = sortedLines.map(element => element.split(' ')[1])

// Create an array holding each word at the end of a pyramid's line.
const decodedWords = []

// Establish initial values
let [row,currentElement] = [1,1]
const numberOfWords = sortedWords.length

// Iterate over each word
while (currentElement <= numberOfWords) {
    const rowsEndingNum = currentElement + row - 1
    // Add the word corresponding to the row's ending number to the decoded words array.
    decodedWords.push(sortedWords[rowsEndingNum - 1])
    currentElement = rowsEndingNum + 1
    row++
}

 // Join the selected words to form the decoded message
 return decodedWords.join(' ')
}

function sortByPrefix(a, b) {
    const numA = parseInt(a.split(' ')[0]);
    const numB = parseInt(b.split(' ')[0]);
    return numA - numB;
}
// Tests:
console.log('Result:')
console.log(decode(messageFilePath))
console.log('Expected:')
console.log('opposite sun rain think ocean to winter wild it ready buy card possible would electric stay post paragraph produce state our compare touch possible')
