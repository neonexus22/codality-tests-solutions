function zerosToRight(A) {
  let first = false;
  let k = -1;
  for (let i = 0; i < A.length; i++) {
    // check if the element is zero and k is -1, coz when k = -1, its hasnt found first zero
    if (A[i] === 0 && k === -1) {
      k = i;
    } else if (k !== -1 && A[i] !== 0) {
      // k !== -1 coz first zero has been found, either 0 or > 0;
      let temp = A[i];
      A[i] = A[k];
      A[k] = temp;
      k++;
    }
  }
  return A;
}

console.log(
  zerosToRight([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 5, 0, 3, 0, 2, 4, 5, 0])
);
