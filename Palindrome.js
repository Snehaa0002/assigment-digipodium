function isPalindrome(number) {
    return number.toString() === number.toString().split('').reverse().join('');
}

let num1 = 12345;
let num2 = 12321;
console.log({num1} is a palindrome: {isPalindrome(num1)});
console.log({num2} is a palindrome: {isPalindrome(num2)});