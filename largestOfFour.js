function largestOfFour(arr) {
  // You can do this!
  var maxArr = [];
  for (var i = 0; i < 4; i++) {
    //console.log(arr[i]);
    var valMin = arr[i][0];
    var valMax = arr[i][0];
    for (var j = 0; j < 4; j++) {
      if (arr[i][j] > valMax) {
        valMax = arr[i][j];
      }
      else {
        
      }
      
    }
    maxArr.push(valMax);
  }
  console.log(maxArr);
  return maxArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);