function groupAnagram(A) {
  let sorted = {};
  for (let i = 0; i < A.length; i++) {
    const s = A[i].split("").sort().join("");
    if (!sorted[s]) {
      sorted[s] = [];
      sorted[s].push(A[i]);
    } else {
      sorted[s].push(A[i]);
    }
  }
  return sorted;
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
