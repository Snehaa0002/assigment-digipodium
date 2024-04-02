function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

const num = 5; 
const result = factorial(num);
console.log("Factorial of", num, "is:", result);
