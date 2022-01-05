// Codewar part1
// https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codewars/preschool-2022-codewars1.md
// https://www.codewars.com/users/V6767404

// 1. hello world
// https://www.codewars.com/kata/function-1-hello-world

function greet(){
    return ("hello world!")
}

// 2.function isDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b
// https://www.codewars.com/kata/can-we-divide-it

function isDivideBy(number, a, b) {
    return (number % a === 0) && (number % b === 0);
}

// https://www.codewars.com/kata/capitalization-and-mutability
// Capitalization and Mutability

function capitalizeWord(word) {
    word[0].toUpperCase();
    return word;
}