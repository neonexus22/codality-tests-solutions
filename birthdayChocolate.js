function birthday(s, d, m) {
    let count = 0;
    for(let i=0; (i+m-1)<s.length; i++) {
        const sum = giveSum(i);
        if(sum === d) {
            count++;
        }
    }


    function giveSum(p) {
        let sum = 0;
        for(let i=p, j=0; j<m; i++, j++) {
            sum = sum + s[i];
        }
        return sum;
    }
    return count;
}

console.log(birthday([1,1,1,1,1,1], 3, 2));
console.log(birthday([1,2,1,3,2], 3, 2));
console.log(birthday([4], 4, 1));