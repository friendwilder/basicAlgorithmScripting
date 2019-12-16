function rangeOfNumbers(startNum, endNum) {
  if (endNum == startNum) {
    return [startNum];
  } else {
    const myArr = rangeOfNumbers(startNum, endNum - 1);
    myArr.push(endNum);
    return myArr;
  }

}

console.log(rangeOfNumbers(5,12));
