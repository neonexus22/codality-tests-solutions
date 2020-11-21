let A = [3, 4, 3, 2, 3, -1, 3, 3, 2];

function solution(A) {
  let length = parseInt(A.length / 2);
  let obj = {};
  let index = {};
  for (let i = 0; i < A.length; i++) {
    obj[A[i]] = obj[A[i]] + 1 || 1;
    index[A[i]] = i;
  }
  const keys = Object.keys(obj);
  let max = 0;
  let val;
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] > max) {
      max = obj[keys[i]];
      val = keys[i];
    }
  }
  if (max > length) {
    return index[val];
  } else {
    return -1;
  }
}

console.log(solution(A));
