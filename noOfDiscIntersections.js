function solution(A) {
  let count = 0;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const aHigh = A[i] + i;
      const aLow = A[i] * -1 + i;
      const bHigh = A[j] + j;
      const bLow = A[j] * -1 + j;
      if (
        (aLow >= bLow && aLow <= bHigh) ||
        (aHigh >= bLow && aHigh <= bHigh) ||
        (bLow >= aLow && bLow <= aHigh) ||
        (bHigh >= aLow && bHigh <= aHigh)
      ) {
        count++;
      }
    }
  }
  return count;
}

console.log(solution([1, 5, 2, 1, 4, 0]));
