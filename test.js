const pigLatin = (word) => {
  let cleanWord = word.trim().toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  // let firstLetter = cleanWord.charAt(0);
  let chr = "";
  let i;
  for (i = 0; i < cleanWord.length; i++) {
    chr = cleanWord.charAt(i);
    if (chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr == "u")
      //  let indexFirstVowel = i;
      break;
  }
  if (i < cleanWord.length) {
    console.log(`The first vowel is located at ${i}`);
    let trimmedLetters = cleanWord.slice(0, i);
    console.log(trimmedLetters);
    let trimmedWord = cleanWord.slice(i);
    console.log(trimmedWord);
    if (i === 0) {
      console.log(`${trimmedWord}${trimmedLetters}yay`);
    } else {
      console.log(`${trimmedWord}${trimmedLetters}ay`);
    }
  } else {
    console.log(`No vowel found`);
  }
};
pigLatin("apple");
