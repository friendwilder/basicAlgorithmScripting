function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num < str.length) {
    str = str.substring(0,num) + "...";
  }
  else {
    
  }
  console.log(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);