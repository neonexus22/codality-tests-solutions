
function solution(A) {

    let right = A.reduce( (sum, x) => sum+x, 0);
    let left = 0;
    let diff = Infinity;
    for(let i=0; i<A.length-1; i++) {
        left += A[i];
        let temp = right - left;
        const val = Math.abs(temp - left);
        diff = diff > val ? val : diff;
    }
    return diff;
}

console.log(solution([1, 2]));