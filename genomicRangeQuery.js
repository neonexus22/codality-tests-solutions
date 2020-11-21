function solution(S, P, Q) {
    const result = [];
    for (let i = 0; i < P.length; i++) {
        const temp = (S.slice(P[i], Q[i]+1));
        if(temp.indexOf('A') > -1) {
            result.push(1);
        }else if (temp.indexOf('C')> -1) {
            result.push(2);
        }
        else if (temp.indexOf('G')> -1) {
            result.push(3);
        }
        else if (temp.indexOf('T')> -1) {
            result.push(4);
        }
    }
    return result;
}

const p = [2,5,0];
const q = [4,5,6];
const s = 'CAGCCTA';

console.log(solution(s, p, q));
console.log(solution('TC', [0, 0, 1], [0, 1, 1]));