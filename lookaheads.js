let sampleWord = "8pass99";
let pwRegex = /(?=\w{5,})(?=^\D+\d{2,})/; // Change this line
let result = sampleWord.match(pwRegex);
console.log(result);