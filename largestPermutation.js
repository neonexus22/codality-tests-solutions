function largestPermutation(k, arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let initialPermutation = +arr.join().split(',').join('');
    let sorted = [...arr].sort( (a,b) => b-a);
    let check = [...arr];
    
    for(let i = 0; i<arr.length && k > 0; i++) {
        if(arr[i] < sorted[i]) {
            const index = check.indexOf(sorted[i]) + i;
            const temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            const newPermutation = +arr.join().split(',').join('');
            if(initialPermutation < newPermutation) {
                initialPermutation = newPermutation;
            }
            k--;
        }
        check = arr.slice(i+1);
    }

  return arr;

}


console.log(largestPermutation(2, [5,2,3,5,1]));
console.log(largestPermutation(1, [4,2,3,5,1]));
console.log(largestPermutation(1, [2,1,3]));
console.log(largestPermutation(1, [2,1]));
console.log(largestPermutation(1, [1,2,3,4]));
console.log(largestPermutation(2, [1,2,3,4]));