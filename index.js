function hasTargetSum(array, target) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

function hasTargetSum(array, target) {
  const seenNumbers = new Set();
  for (const num of array) {
    const difference = target - num;
    if (seenNumbers.has(difference)) {
      return true;
    } else {
      seenNumbers.add(num);
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  -The time complexity of the function is O(n), where n is the length of the array.
*/

/* 
  Add your pseudocode here
  -Create a set hold previously seen numbers.
  -Iterate through the array.
   -If the difference between the target and the current number is in the set, return true.
   -Otherwise, add the current number to the set.
  -If we get through the whole array without finding a sum, return false.
*/

/*
  Add written explanation of your solution here
  The solution works by keeping a set of previously seen numbers, and iterating through the array. For each number, 
  we check if the difference between the target and the current number is in the set. If it is, 
  then we have found two numbers that sum to the target, and we return true. If it's not, then we add the current number to the set and move on to the next number. 
  If we get through the whole array without finding a sum, then we return false.
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
