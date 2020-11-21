
function solution1(A) {
    let result = [];
    [...new Set(A)].map(x => {
        const temp = A.filter(b => b === x).length;
        if(temp%2 !== 0) {
            result.push(x);
        }
    })
    return result[0];
}

function solution(A) {
    let freq = {};
    for(let x of A) {
        freq[x] = ( freq[x] || 0 ) + 1;
    }
    for(let y in freq) {
        if(freq[y] % 2 !==0 ) {
            return parseInt(y);
        }
    }
}

function solution2(A) {
    let result = 0;
    let data = A.join('-');
    console.log(data);
    A.forEach(el => {
        const reg = new RegExp(el, 'gi');
        const count = data.match(reg);
        if(count.length === 1) {
            result = el;
        }
    });
    return result;
}
let d = [];
for(let i=1; i<200; i++) {
    d.push(i);
}
d.push(201);
for(let i=1; i<200; i++) {
    d.push(i);
}

// console.log(solution([9, 3, 9, 3, 9, 7, 9]));

// let a = [17,28,30];
// let b = [99,16,8];
// let count = [0,0]
// a.forEach( (x,i) => (x !== b[i] && (x > b[i] ? count[0]++ : count[1]++ )) );
// console.log(count);

let a = 'car', b = 'rac';
console.log(b.split('').sort().join(''));
