
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let arr = [...new Set(A.sort())];
    for(let i = 1; i<=A.length; i++) {
        if(arr.indexOf(i) < 0) {
            return i;
        }
    }
    
    return -1;
    
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));