let a = [2, 4];
let b = [16, 32, 96];

function getTotalX(a, b) {
  // Write your code here
  let start = a[a.length - 1];
  let end = b[0];
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (areFactorsOf(i) && isAFactorOf(i)) {
      count++;
    }
  }

  function areFactorsOf(x) {
    for (let i = 0; i < a.length; i++) {
      if (x % a[i] !== 0) return false;
    }
    return true;
  }

  function isAFactorOf(y) {
    for (let i = 0; i < b.length; i++) {
      if (b[i] % y !== 0) {
        return false;
      }
    }
    return true;
  }
  console.log(count);
  return count;
}

getTotalX(a, b);
