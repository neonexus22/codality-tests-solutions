function minAverageTwoSlice(A) {
    let index = 0;
    let minAvg = Infinity;

    for(let x=2; x<A.length; x++) {
        let p = 0;
        let q = p+x-1;
        for( p=0; p<A.length && q<A.length; p++,q++) {
            const sum = giveSum(A,p,x);
            const avg = sum/(q-p+1);
            if(avg < minAvg) {
                minAvg = avg;
                index = p;
            }
        }
    }
    function giveSum(A,p,q) {
        let sum = 0;
        for(let i = p, j = 0; j<q; i++, j++) {
            sum = sum + A[i];
        }
        return sum;
    }
    return index;
}

console.log(minAverageTwoSlice([4,2,2,5,1,5,8]));