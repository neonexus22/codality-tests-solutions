function merge(A, B) {
  let sorted = [];
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      sorted.push(A[i]);
      i++;
    } else if (B[j] < A[i]) {
      sorted.push(B[j]);
      j++;
    } else {
      sorted.push(A[i]);
      sorted.push(B[j]);
      i++;
      j++;
    }
  }
  const Arem = A.slice(i);
  const Brem = B.slice(j);
  sorted = sorted.concat(Arem).concat(Brem);

  return sorted;
}

function mergeSort(A) {
  if (A.length <= 1) {
    return A;
  }
  const mid = Math.floor(A.length / 2);
  const left = mergeSort(A.slice(0, mid));
  const right = mergeSort(A.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 6, 8, 3, 1, 9, 3, 7, 2]));
