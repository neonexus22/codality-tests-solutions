
function solution(n) {
    let length = 0;
    // convert to binary and split it into array of 1s and 0s
    const atemp = n.toString(2).split('');
    // convert to binary and split by 1s to get ''/'000'/'0000'
    const arr = n.toString(2).split('1');
    // if 1 is not present at last, remove the last string of 0s '0000'
    if(atemp[atemp.length-1] !== '1'){
        arr.pop();
    }
    arr.reduce((x,y) => {
       // get the maximum length of 0's and store in temp
       const temp = Math.max(x.length, y.length);
       // get the largest length in length variable
       length = length > temp ? length : temp;
       // return y to keep the loop going
       return y;
    });
    return length;
}

console.log(solution(1041));
console.log(solution(32));
console.log(solution(328));
