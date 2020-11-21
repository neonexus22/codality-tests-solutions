function solution1(A) {
    A.sort();
    let len = A.length + 1;
    for(let i=1; i<=len; i++) {
        if( i === A[0]){
            A.splice(0,1);
        }
        else {
            return i;
        }
    }
}

console.log(solution1([2]));