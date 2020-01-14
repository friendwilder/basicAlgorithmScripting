const squareList = (arr) => {
  // only change code below this line
  var newArr = arr.filter(item => item > 0 && item % 1 == 0);

  newArr = newArr.map(item => item*item);


  return newArr;
  // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
