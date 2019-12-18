function findElement(arr, func) {
  let num;
  let found = false;
  for(let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true && found == false) {
      num = arr[i];
      found = true;
    }
    console.log(arr[i]);
  }
  console.log(num);
  return num;
}

findElement([1, 3, 5, 9], num => num % 2 === 0);
