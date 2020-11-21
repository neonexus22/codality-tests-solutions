const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInteger(str) {
  let total = 0;
  for (let i = 0; i < str.length; i = i + 2) {
    total += getValue(str[i], str[i + 1]);
  }
  console.log(total);
  return total;
}

function getValue(x, y) {
  let a = map[x] || 0;
  let b = map[y] || 0;
  if (a < b) {
    return b - a;
  } else {
    return b + a;
  }
}

romanToInteger("XCII");
