function solution(A) {
  let B = [...A];
  A.sort();
  const x = product(B);
  const y = product(A);

  return x > y ? x : y;
}

function product(A) {
  let arr = [A[0], A[1], A[2]];
  let product = A[0] * A[1] * A[2];
  arr.sort();
  for (let i = 3; i < A.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const temp = arr[j];
      arr[j] = A[i];
      const p = arr[0] * arr[1] * arr[2];
      if (product < p) {
        product = p;
        break;
      } else {
        arr[j] = temp;
      }
    }
    arr.sort();
  }
  return arr[0] * arr[1] * arr[2];
}

console.log(solution([-3, 1, 2, -2, 5, 6]));
console.log(solution([-5, 5, -5, 4]));
console.log(solution([-4, -6, 3, 4, 5]));
console.log(solution([4, 7, 3, 2, 1, -3, -5]));
