function sumOfOddNumbersInRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

const start = 130;
const end = 490;


const sumOfOdd = sumOfOddNumbersInRange(start, end);

console.log("Sum of odd numbers between " + start + " and " + end + " is: " + sumOfOdd);

