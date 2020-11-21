function distinct(A) {
  let data = {};
  for (let i = 0; i < A.length; i++) {
    data[A[i]] = data[A[i]] + 1 || 1;
  }
  const val = Object.keys(data);
  return val.length;
}

console.log(distinct([2, 1, 1, 2, 3, 1]));
