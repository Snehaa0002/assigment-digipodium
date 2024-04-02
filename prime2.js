function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function printPrimesInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
const start = 200;
const end = 360;

console.log("Prime numbers between " + start + " and " + end + ":");
printPrimesInRange(start, end);

