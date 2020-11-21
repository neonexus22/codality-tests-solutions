function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let middle = start + Math.floor((end - start) / 2);

  while (arr[middle] !== el && start <= end) {
    el < arr[middle] ? (end = middle - 1) : (start = middle + 1);
    middle = start + Math.floor((end - start) / 2);
  }
  return arr[middle] === el ? middle : -1;
}

console.log(binarySearch([1, 2], 3));
