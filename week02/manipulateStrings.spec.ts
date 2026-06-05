//Given a string s consisting of words and spaces, return the length of the last word in the string

//split("") means breaks into characters.

//split(" ") means breaks into words by spaces.
//Example:1 
function getLastWord(s) {

let fullWord = s.split(" ");

let lastWord = fullWord[fullWord.length - 1];

console.log("Last word:", lastWord);

    return lastWord;
}

getLastWord("Hello world");

//Example:2 
function getWordLen(sr) {
    // Step 1: Split the string into an array of words
    let words = sr.split(" ");

    // Step 2: Find the last word in the array
    let lastWord = words[words.length - 1];

    console.log("Last word length:", lastWord.length);
    return lastWord;
}

getWordLen(" fly me   to   the moons");    

//Example:3 
function isAnagram(wrd1, wrd2) {
      wrd1 = wrd1.replace(/\s+/g, "")
      wrd2 = wrd2.replace(/\s+/g, "")

      let sortedwrd1 = wrd1.split("").sort().join("");
      let sortedwrd2 = wrd2.split("").sort().join("");

      let result = sortedwrd1 === sortedwrd2;

      console.log("Are", wrd1, "and", wrd2, "anagrams?", result);


    return result;
}

isAnagram("listen", "silent");
isAnagram('hello', 'world');
isAnagram("rail safety", "fairy tales");
