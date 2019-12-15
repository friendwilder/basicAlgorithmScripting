var count = 0;

function cc(card) {
  // Only change code below this line
  if (card > 1 && card < 7) {
    count++;
  }
  else if (card > 6 && card < 10) {
    //No hace nada
  }
  else {
    count--;
  }
  if (count > 0) {
    return count + " Bet";
}
  else {
    return count + " Hold"
  }

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(4); cc(5); cc(6);
console.log(count)