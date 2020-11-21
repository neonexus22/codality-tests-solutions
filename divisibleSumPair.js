function divisibleSumPair(n, k, ar) {
    let count=0;
    for(let i=0; i<ar.length; i++) {
        for(let j=i+1; j<ar.length; j++) {
            if((ar[i]+ar[j])%k === 0) {
                count++;
            }
        }
    }
    return count;
}

console.log(divisibleSumPair(6,3,[1,3,2,6,1,2]));