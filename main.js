"use strict";

// // brings in the assert module for unit testing
// const assert = require("assert");
// // brings in the readline module to access the command line
// const readline = require("readline");
// const { workerData } = require("worker_threads");
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const pigLatin = (word) => {
  // Your code here
  let cleanWord = word.trim().toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let firstLetter = cleanWord.charAt(0);
  if (
    firstLetter === "a" ||
    firstletter === "e" ||
    firstLetter === "i" ||
    firstLetter === "o" ||
    firstLetter === "u"
  ) {
    let pigLatinWord = cleanWord.concat("yay");
    console.log(pigLatinWord);
  } else {
    console.log("Uh oh for the moment");
  }
  // break your code into pieces and focus on one piece at a time...
  // 1. if word begins with a vowel send to one function: adds "yay"
  // 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
  // 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
  // should translate a simple word
  // should translate a complex word
  // should attach "yay" if word begins with vowel
  // should lowercase and trim word before translation
  // array of vowels to compare to the word
  // find the first vowel in the word
  // if the first letter is a vowel add yay
  // if the first letter is a consonant, move the letter to the end and add ay
  // if the first 2 letters are complex move both letters to the end and add ay
};

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question("word ", (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
};

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
// if (typeof describe === "function") {
//   describe("#pigLatin()", () => {
//     it("should translate a simple word", () => {
//       assert.equal(pigLatin("car"), "arcay");
//       assert.equal(pigLatin("dog"), "ogday");
//     });
//     it("should translate a complex word", () => {
//       assert.equal(pigLatin("create"), "eatecray");
//       assert.equal(pigLatin("valley"), "alleyvay");
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin("egg"), "eggyay");
//       assert.equal(pigLatin("emission"), "emissionyay");
//     });
//     it("should lowercase and trim word before translation", () => {
//       assert.equal(pigLatin("HeLlO "), "ellohay");
//       assert.equal(pigLatin(" RoCkEt"), "ocketray");
//     });
//   });
// } else {
//   getPrompt();
// }
