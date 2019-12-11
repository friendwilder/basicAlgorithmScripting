function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  console.log(target.length);
  console.log(str.length);
  console.log(str.substring(6,7));
  if ((str.substring(str.length-target.length, str.length) == target)) {
    return true;
  } 
  else {
    return false;
  }
  return str;
}

confirmEnding("Bastian", "n");