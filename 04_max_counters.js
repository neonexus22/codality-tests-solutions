function solution(N, A) {
  let result = new Array(N).fill(0);
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      let val = A[i];
      max = result[val - 1] + 1;
      result[val - 1] = max;
    } else if (A[i] === N + 1) {
      result = new Array(N).fill(max);
    }
  }
  return result;
}

console.log(solution(5, [2, 6, 2, 6, 6]));
