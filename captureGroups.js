let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) \w?.? ?Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
console.log(result);
// After passing the challenge experiment with myString and see how the grouping works
