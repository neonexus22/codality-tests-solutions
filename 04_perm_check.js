function solution(A) {
    let unique = [...new Set(A.sort())];
    if(unique.length !== A.length) {
        return 0;
    }
    for(let i=1; i<=A.length; i++) {
        if(A[i-1] !== i) {
            return 0;
        }
    }

    return 1;
}

console.log(solution([4,1,3]));
console.log(solution([4,1,3,2]));
console.log(solution([3,1]));
console.log(solution([2,3,4,5,6,7,8]));