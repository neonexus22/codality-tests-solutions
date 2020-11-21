// Given a non-negative integer "num" represented as a string, remove "k" digits from the number
// so that the new number is the smallest possible
// Note:
//      1. The length of "num" is less than 10002 and will be >=k
//      2. The given "num" does not contain any leading zero.

// Example 1:
// Input: num = "1432219", k = 3, Output: "1219"

// Example 2:
// Input: num = "10200", k = 1; Output: "200"

// Example 3:
// Input: num = "10", k = 2; Output "0"

function removeKdigits(num, k) {
  let stack = [];
  stack.push(num[0]);
  for (let i = 1; i < num.length; i++) {
    if (stack[stack.length - 1] > num[i] && k > 0) {
      stack.pop();
      stack.push(num[i]);
      k--;
    } else {
      stack.push(num[i]);
    }
  }
  let res = stack.join("");
  if (k > 0) {
    res = res.slice(0, +k * -1);
  }
  res = parseInt(res) || 0;

  console.log(res);
  return res;
}

removeKdigits("1432219", 3);
removeKdigits("10200", 1);
removeKdigits("10", 2);
