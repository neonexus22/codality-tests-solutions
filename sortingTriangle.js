function solution(A) {
  if (A.length < 3) {
    return 0;
  }
  if (A.length === 3) {
    return checkSum(A);
  }
  let arr = [];
  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        const temp = [A[i], A[j], A[k]];
        arr.push(temp);
      }
    }
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (checkSum(arr[i])) {
      return 1;
    }
  }

  return 0;
}

function checkSum(A) {
  if (A[0] + A[1] > A[2] && A[1] + A[2] > A[0] && A[2] + A[0] > A[1]) {
    return 1;
  } else {
    return 0;
  }
}

// console.log(solution([5, 3, 3]));
console.log(solution([10, 50, 5, 1]));
// console.log(solution([1, 1, 2, 3, 5]));
// console.log(solution([10, 2, 5, 1, 8, 20]));
// console.log(solution([1, 1, 1, 1, 5, 5, 5]));
// console.log(solution([1, 1, 1, 1, 5, 5, 5, 8,9,3]));
