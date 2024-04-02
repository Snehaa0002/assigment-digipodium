function reverseNumber(number) {
    let reversed = 0;
    while (number !== 0) {
        const digit = number % 10;
        reversed = (reversed * 10) + digit;
        number = Math.floor(number / 10);
    }
    return reversed;
}


const num = 12345; 
const reversedNum = reverseNumber(num);
console.log("Original number:", num);
console.log("Reversed number:", reversedNum);