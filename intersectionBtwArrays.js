// Find the intersection between arrays
const a = [2, 6, 9, 11, 13, 17],
  b = [3, 4, 6, 7, 10, 13, 15],
  c = [4, 5, 6, 9, 11, 13];

// in each loop check for equality of all three
// in first loop, 2 < 3, so first pointer will go to 6; 3 < 4, second pointer will go to 4

function findIntersection(a, b, c) {
  let result = [];
  let x = 0,
    y = 0,
    z = 0;
  while (x < a.length && y < b.length && z < c.length) {
    if (a[x] === b[y] && b[y] === c[z]) {
      result.push(a[x]);
      x++, y++, z++;
    } else if (a[x] < b[y]) {
      ++x;
    } else if (b[y] < c[z]) {
      ++y;
    } else ++z;
  }
  console.log(result);
}

findIntersection(a, b, c);
