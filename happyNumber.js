function square(n) {
  let sum = 0;
  while (n !== 0) {
    const rem = n % 10;
    sum += rem * rem;
    n = parseInt(n / 10);
  }
  return sum;
}

function isHappy(n) {
  let set = new Set();
  let sum;
  while (!set.has(square(n))) {
    sum = square(n);
    if (sum === 1) {
      return true;
    } else {
      n = sum;
      set.add(n);
    }
  }
  return false;
}

console.log(isHappy(23));
