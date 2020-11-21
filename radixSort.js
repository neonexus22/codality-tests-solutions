function getDigit(num, index) {
  return Math.floor((Math.abs(num) / Math.pow(10, index)) % 10);
}

function getLength(num) {
  return num.toString().length;
}

function getMaxDigitLength(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, getLength(arr[i]));
  }
  return max;
}

function radixSort(arr) {
  const length = getMaxDigitLength(arr);
  for (let i = 0; i < length; i++) {
    let temp = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let val = getDigit(arr[j], i);
      temp[val].push(arr[j]);
    }
    arr = [].concat(...temp);
  }
  return arr;
}

console.log(radixSort([1, 45, 2, 789, 2345, 12, 34, 6, 4, 897, 2345]));
