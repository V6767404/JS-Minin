//1. https://www.codewars.com/kata/function-1-hello-world
// https://bokki.org/codewars/8kyu/8kyu-hello-name-or-world/

function greet(){
    return ("hello world!")
}
//
function hello(name) {
    if (typeof name === "undefined" || name.length === 0) {
        return `Hello, World!`;
    } else {
        return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
    }
}

//2. https://www.codewars.com/kata/can-we-divide-it

function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0
}
//
isDivideBy = (n, a, b) => !(n % a || n % b);

//3 https://www.codewars.com/kata/capitalization-and-mutability

function capitalizeWord(word) {
    // word[0] = word[0].toUpperCase();
    const word2 = word.charAt(0).toUpperCase() + word.slice(1);
    return word2;
}
//

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

//4 https://www.codewars.com/kata/century-from-year
//Given a year, return the century it is in.