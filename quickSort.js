function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, swapIdx, start);
  return swapIdx;
}

// console.log(pivot([5, 3, 4, 2, 8, 6, 7, 1]));
// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(new Date().getMilliseconds());
console.log(quickSort([8, 3, 4, 2, 5, 6, 7, 1]));
// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
console.log(new Date().getMilliseconds());
