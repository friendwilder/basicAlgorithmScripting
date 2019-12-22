function bouncer(arr) {
  // Don't show a false ID to this bouncer.
    var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) == true) {
      newArr.push(arr[i]);
    }
    console.log(Boolean(arr[i]));
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
