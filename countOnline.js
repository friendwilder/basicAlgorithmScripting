function countOnline(usersObj) {
  // change code below this line
  let counter = 0;
  for (let user in usersObj) {
    console.log(usersObj[user]);
    if (usersObj[user]['online'] == true) {  // also usersObj[user].online
    //usersObj.user not good because user is not an element is a variable
      counter++;
    }
  }
  return counter;
  // change code above this line
}
