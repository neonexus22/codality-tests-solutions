
function solution(K, A) {
    if(!A.length) return -1;
    let arr = Array.from(Array(K+1).keys());
    arr = arr.splice(1);
    console.log("arr is : ", arr);
    for(let i = 0; i<A.length; i++) {
        const index = binarySearch(A[i], arr);
        if(index > -1) {
            arr.splice(index, 1);
        }
        // console.log(`i=${i}, ${A[i]}, index=${index} ${arr}`);
        if(arr.length === 0) {
            return i;
        }
    }
    return -1;
}

function binarySearch(x, arr) {

    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor( (start+end) / 2);

    while(arr[middle] != x && start <= end) {
        if(arr[middle] < x) {
            start = middle + 1;
        }else {
            end = middle -1;
        }
        middle = Math.floor( (start+end) / 2);
    }
    if(arr[middle] === x) {
        return middle;
    }
    return -1;
}
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solution(3, [1, 3, 1, 3, 2, 1, 3]));