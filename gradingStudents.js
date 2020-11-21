
function gradingStudents(grades) {
        const result = [];
        for(let i = 0; i<grades.length; i++) {
            const remainder = grades[i] % 5;
            if(5-remainder < 3) {
                const val = Math.floor(grades[i]/5);
                const res = 5 * (val + 1);
                if(res < 40) {
                    result.push(grades[i]);
                }else {
                    result.push(res);
                }
            }else {
                result.push(grades[i]);
            }
        }
        return result;
   
}

console.log(gradingStudents([73, 67, 38, 33]));