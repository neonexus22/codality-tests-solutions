function solution(x, y, d) {
    let temp = y - x;
    if(temp < 0){
        return 0;
    }
    let val = parseInt(temp/d);
    let sum = d*val+x;
    if( sum < y) {
        val++;
    }
    return val;
}

console.log(solution(3, 999111321, 2));
console.log(solution(10, 85, 30));
console.log(solution(5, 105, 3));
console.log(solution(50, 199, 4));