// find the longest subsequence in an array.
// [1,6,3,8,4,9,2], the output should be 4 for [1,2,3,4]

function longestSubsequence(arr) {
  let set = {};
  let max = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    set[[arr[i]]] = "true";
  }
  for (let num in set) {
    if (!set[num - 1]) {
      let current = num;
      count = 1;
      while (set[+current + 1]) {
        count++;
        delete set[+current];
        ++current;
      }
    }
    max = Math.max(count, max);
  }
  console.log(max);
}

longestSubsequence([9, 6, 3, 8, 4, 4, 1]);
