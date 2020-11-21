function numberOfCarryOperations(a,b) {
    let carryCount = 0;
    let carryAmount = 0;
    while(a >0 || b>0) {
        let atemp = a%10;
        a = parseInt(a/10);
        let btemp = b%10;
        b = parseInt(b/10);

        carryAmount = (carryAmount + atemp + btemp) > 9 ? 1 : 0;

        if(carryAmount > 0) {
            carryCount++;
        }
    }
    return carryCount;
}

console.log(numberOfCarryOperations(123, 456)) // 0
console.log(numberOfCarryOperations(555, 555)) // 3
console.log(numberOfCarryOperations(900, 11)) // 0
console.log(numberOfCarryOperations(145, 55)) // 2
console.log(numberOfCarryOperations(0, 0)) // 0
console.log(numberOfCarryOperations(1, 99999)) // 5
console.log(numberOfCarryOperations(999045, 1055)) // 5
console.log(numberOfCarryOperations(101, 809)) // 1
console.log(numberOfCarryOperations(189, 209)) // 1