"use strict";

// brings in the assert module for unit testing
// const assert = require("assert");
// brings in the readline module to access the command line
// const readline = require("readline");
// const { workerData } = require("worker_threads");
// use the readline module to print out to the command line
// const rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout,
// });
const pigLatin = (word) => {
  let cleanWord = word.trim().toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let chr = "";
  let i;
  for (i = 0; i < cleanWord.length; i++) {
    chr = cleanWord.charAt(i);
    if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u")
      break;
  }
  if (i < cleanWord.length) {
    let trimmedLetters = cleanWord.slice(0, i);
    let trimmedWord = cleanWord.slice(i);
    if (i === 0) {
      return `${trimmedWord}${trimmedLetters}yay`;
    } else {
      return `${trimmedWord}${trimmedLetters}ay`;
    }
  } else {
    return `No vowel found`;
  }
  const sentencePigLatin = (sentence) => {
    // place all words into an Array , then capture array
    let newArray = sentence.split(" ");
    console.log(newArray);
    // [I, am, happy, today]
    // need to seperate each word out into it's own array
    let seperateWord = newArray.map((word) => pigLatin(word));
    console.log("Pig latin array:", seperateWord);
    // loop through each word in the array and then each character like previously
    // join back to a string
    let newPigSentence = seperateWord.join(" ");
    // let newPigSentence = seperateWord.slice(0);

    console.log("hey there", newPigSentence);
    // let newPigString = newPigSentence.join(" ");
    // console.log(newPigString);
    // return newPigString;
    // document.getElementById();
    const newElement = document.createElement("p");
    newElement.innerHTML = "newPigSentence";
    document.getElementById("user-input").appendChild(newElement);
    return newPigSentence;
  };
  // sentencePigLatin("Hey there sweetie");

  // if (i < cleanWord.length) {
  //   console.log(`The first vowel is located at ${i}`);
  //   let trimmedLetters = cleanWord.slice(0, i);
  //   console.log(trimmedLetters);
  //   let trimmedWord = cleanWord.slice(i);
  //   console.log(trimmedWord);
  //   if (i === 0) {
  //     return `${trimmedWord}${trimmedLetters}yay`;
  //   } else {
  //     return `${trimmedWord}${trimmedLetters}ay`;
  //   }
  // } else {
  //   console.log(`No vowel found`);
  // }
};
// pigLatin("apple");
// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question("word ", (answer) => {
//     console.log(pigLatin(answer));
//     getPrompt();
//   });
// };

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
