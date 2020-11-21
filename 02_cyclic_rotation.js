
function solution(A, K) {

    while(K > 0 && A.length > 0) {
        const temp = A.pop();
        A = [temp, ...A];
        K--;
    }
    return A;
}

console.log(solution([3,8,9,7,6], 2));