function findLongestWordLength(str) {
  var prevCounter = 0;
  var counter = 0;
  for (var i = 0; i <= str.length; i++) {
    //console.log(str[i])
    if (str[i] == " " || str[i] == undefined) {
      if (counter > prevCounter) {
        prevCounter = counter;
      }
      counter = 0;
    }
    counter++;
  }
  console.log(prevCounter - 1);
  return prevCounter - 1;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");