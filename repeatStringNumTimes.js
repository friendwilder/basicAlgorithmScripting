function repeatStringNumTimes(str, num) {
  // repeat after me
  var auxStr = "";
  if (num <= 0) {
    str = "";
  }
  else {
    for (var i = 0; i < num; i++) {
      //console.log(str);
      auxStr += str;
    }
    str = auxStr;
  }
  return str;
}

repeatStringNumTimes("abc", 3);