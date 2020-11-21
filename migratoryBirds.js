function migratoryBirds(arr) {
    let countPair = {
        data : {
            name: 0,
            value: 0
        }
    };
    let pair = {};
    for(let i = 0; i<arr.length; i++) {
        pair[arr[i]] = pair[arr[i]] + 1 || 1;
        if(pair[arr[i]] > countPair.data.value) {
            countPair.data.name = arr[i];
            countPair.data.value = pair[arr[i]];
        } else if (pair[arr[i]] === countPair.data.value) {
            if(arr[i] < countPair.data.name) {
                countPair.data.name = arr[i];
            }
        }
    }
    return countPair.data.name;
}

console.log(migratoryBirds([1,4,4,4,5,3]));
console.log(migratoryBirds([1,1,2,3,4,5,4,3,2,1,3,4]));