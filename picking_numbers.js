/**
,* Given an array of integers, find and print the maximum
 * number of integers you can select from the array such that
 * the absolute difference between any two of the chosen integers is less than or equal to .
 * For example, if your array is a=[1,1,2,2,4,4,5,5,5] , you can create two subarrays meeting the criterion:
 *  [1,1,2,2] and [4,4,5,5,5] . The maximum length subarray has 5 elements.
 */

function pickingNumbers(a) {
  let p = {};

  for (let i = 0; i < a.length; i++) {
    p[a[i]] = p[a[i]] + 1 || 1;
  }
  console.log(p);
  let num = 0;
  let keys = Object.keys(p);
  if (keys.length === 1) {
    console.log(p[keys[0]]);
    return p[keys[0]];
  }
  for (let i = 0; i < keys.length - 1; i++) {
    if (Math.abs(parseInt(keys[i]) - parseInt(keys[i + 1])) === 1) {
      num = Math.max(num, p[keys[i]] + p[keys[i + 1]]);
    }
  }
  console.log(num);
  return num;
}
let a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
let b = [1, 2, 2, 3, 1, 2];
let c = [4, 6, 5, 3, 3, 1];
let d = [4, 4, 4, 4, 4];
let e = [
  4,
  97,
  5,
  97,
  97,
  4,
  97,
  4,
  97,
  97,
  97,
  97,
  4,
  4,
  5,
  5,
  97,
  5,
  97,
  99,
  4,
  97,
  5,
  97,
  97,
  97,
  5,
  5,
  97,
  4,
  5,
  97,
  97,
  5,
  97,
  4,
  97,
  5,
  4,
  4,
  97,
  5,
  5,
  5,
  4,
  97,
  97,
  4,
  97,
  5,
  4,
  4,
  97,
  97,
  97,
  5,
  5,
  97,
  4,
  97,
  97,
  5,
  4,
  97,
  97,
  4,
  97,
  97,
  97,
  5,
  4,
  4,
  97,
  4,
  4,
  97,
  5,
  97,
  97,
  97,
  97,
  4,
  97,
  5,
  97,
  5,
  4,
  97,
  4,
  5,
  97,
  97,
  5,
  97,
  5,
  97,
  5,
  97,
  97,
  97,
];
pickingNumbers(e);
