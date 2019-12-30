let username = "Z97";
let userCheck = /^[A-Za-z][A-Za-z]+[0-9]*$|^[A-Za-z]+[0-9][0-9]+$/; // Change this line
let result = username.match(userCheck);

console.log(result);
