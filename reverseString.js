function reverseString(str) {
  //console.log(str.length-1);
  var myStr = "";
  //console.log(myStr);
  for (var i = str.length - 1; i > -1; i--) {
    //console.log(i);
    myStr += str[i];
  }
  console.log(myStr)
  str = myStr;
  return str;
}

reverseString("hello");


