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
    // console.log(`The first vowel is located at ${i}`);
    let trimmedLetters = cleanWord.slice(0, i);
    // console.log(trimmedLetters);
    let trimmedWord = cleanWord.slice(i);
    // console.log(trimmedWord);
    if (i === 0) {
      return `${trimmedWord}${trimmedLetters}yay`;
    } else {
      return `${trimmedWord}${trimmedLetters}ay`;
    }
  } else {
    return `No vowel found`;
  }
};

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
  return newPigSentence;
};
sentencePigLatin("sweetie");
