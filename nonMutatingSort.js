var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  var localArray = arr.concat([]);
  localArray.sort((a,b) => a - b);
  return localArray;

  // Add your code above this line
}
nonMutatingSort(globalArray);
