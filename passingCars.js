function solution(A) {
    let count = 0;
    let zero = 0;
    for(let i = 0; i<A.length; i++) {
        if(A[i] === 0) {
            count += A.length - (i+1) - zero;
            zero++;
        }
    }
    if(count > 1000000000) {
        return -1;
    }
    return count;

}

console.log(solution([0,1,0,1,1]));
console.log(solution([0, 1, 0, 1, 0, 1]));