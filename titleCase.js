function titleCase(str) {
  str = str.toLowerCase();
  var newStr = '';
  var splittedStr = str.split(" ");
  for (var i = 0; i < splittedStr.length; i++) {
    //console.log(splittedStr[i].charCodeAt(0))
    var valAscii = splittedStr[i].charCodeAt(0);
    if (valAscii > 96) {
      valAscii -= 32;
       
    } 
    valAscii = String.fromCharCode(valAscii);
    var newSplittedStr = splittedStr[i].replace(splittedStr[i][0], valAscii);
    newStr += newSplittedStr + ' ';
  }
  newStr = newStr.substring(0,newStr.length-1);
  console.log(newStr);
  return newStr;
}

titleCase("I'm a little tea pot");
