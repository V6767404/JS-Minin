// Codewar part1
// https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codewars/preschool-2022-codewars1.md
// Числа https://learn.javascript.ru/number
// Строки https://learn.javascript.ru/string
// https://learn.javascript.ru/number
// https://www.codewars.com/users/V6767404


//1. https://www.codewars.com/kata/function-1-hello-world
// https://bokki.org/codewars/8kyu/8kyu-hello-name-or-world/

function greet() {
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
// https://stackoverflow.com/questions/52030180/getting-century-from-year/52691787

//Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
//Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.

function century(year) {
    return Math.floor((year + 99) / 100);
    // return Math.ceil(year/100);
}

//
function century(year) {
    var x = Math.floor((year - 1) / 100) + 1;
    return x;
}

//
function century(year) {
    var x = Math.floor(year / 100);
    if (year % 100 === 0)
        return x;
    else
        return x + 1;
}

//
const century = year => Math.ceil(year / 100)

//
function century(year) {
    return (year + 99) / 100 | 0;
}

//
function century(year) {
    if (year <= 100) {
        return 1;
    }
    let cen = parseInt(year / 100);
    let rem = year % 100;

    return rem === 0 ? cen : cen + 1;
}

//5 https://www.codewars.com/kata/convert-a-number-to-a-string

function numberToString(num) {
    // Return a string of the number here!
    let str = num.toString();
    return str;
}

// let num = 75;
// let z = num.toString();
// console.log(z+5);
// console.log(num+5);

function numberToString(num) {
    return num.toString();
}

//6	https://www.codewars.com/kata/convert-a-string-to-a-number
//Для явного преобразования к числу можно использовать + или Number(). Если строка не является в точности числом, то результат будет NaN
// Функция parseInt возвращает целое число, а parseFloat возвращает число с плавающей точкой

var stringToNumber = function (str) {
    return +str;
    // return Number(str);
    // return parseInt(str);
};
// const stringToNumber = str => Number(str)
// stringToNumber = parseInt;
// var stringToNumber = Number;

//7	https://www.codewars.com/kata/convert-to-binary
// https://medium.com/@dubbsong/tobinary-js-8kyu-97-34e95db9675e

function toBinary(n) {
    return +n.toString(2);
    // return Number(n.toString(2));
    // return parseInt(n.toString(2));
}

//
const toBinary = n => (n >>> 0).toString(2)

//
function largestPowerOf(n, number) {
    var p = number;
    while (p < n) {
        p *= number;
    }
    return p
}

function toBinary(n) {
    var binaryString = '';
    var power = largestPowerOf(n, 2)
    while (power >= 1) {
        if (n - power >= 0) {
            n -= power;
            binaryString += '1';
        } else {
            binaryString += '0';
        }
        power /= 2;
    }
    return parseInt(binaryString)
}

//8	https://www.codewars.com/kata/even-or-odd

function even_or_odd(number) {
    if (number % 2 === 0) return "Even";
    return "Odd";
}

//
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
    // return number % 2 === 0 ? 'Even' : 'Odd';
}

//
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';

//9	https://www.codewars.com/kata/fake-binary/javascript
// Fake Binary
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// https://bokki.org/codewars/8kyu/8kyu-fake-binary/
// https://forum.freecodecamp.org/t/help-w-algorithm/157400
// https://github.com/michan94/codewars/blob/master/Solutions/Python/fakeBinary.md

function fakeBin(x) {
    var outputString = "";

    for (var i = 0; i < x.length; i++) {
        if (Number(x[i]) <= 4) {
            outputString += "0";
        } else {
            outputString += "1";
        }
    }
    return outputString;
    // console.log (outputString);
}

//
function fakeBin(x) {
    return x.split('').map((num) => num > 4 ? 1 : 0).join('');
}

//
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

//10 https://www.codewars.com/kata/largest-square-inside-a-circle
// Largest Square Inside A Circle
// Determine the area of the largest square that can fit inside a circle with radius r.
// S = 2R^2 //Math.pow(n, power)

function areaLargestSquare(r) {
    s = 2 * Math.pow(r, 2)
    return s;
}

//
const areaLargestSquare = (r) => r * r * 2;
//
var areaLargestSquare = r => r ** 2 + r ** 2

//11	https://www.codewars.com/kata/number-of-decimal-digits
// Number of Decimal Digits
function digits(n) {
    return n.toString().length;
    // return String(n).length
    //  return `${n}`.length;
}

//
function digits(n) {
    // code goes here
    var count = 0;
    if (n >= 0) count = 1;

    while (n / 10 >= 1) {

        n /= 10;
        count++;
    }
    return count;
}

//12	https://www.codewars.com/kata/opposite-number
// Opposite number
function opposite(number) {
    return -number;
}

//13	https://www.codewars.com/kata/perimeter-sequence
// Perimeter sequence
function perimeterSequence(a, n) {
    return a * n * 4;
}

// 14	https://www.codewars.com/kata/remove-first-and-last-character
// Remove First and Last Character

function removeChar(str) {

    outputString = "";
    for (var i = 1; i < str.length - 1; i++) {
        outputString += str[i];
    }
    return outputString;
    // console.log(outputString);
}

//
function removeChar(str) {
    return str.slice(1, -1);
}

//
function removeChar(str) {
    return str.substring(1, str.length - 1);
}

//
removeChar = str => str.slice(1, -1)

// 15 https://www.codewars.com/kata/remove-string-spaces
// Remove String Spaces

function noSpace(x) {
    var outputString = "";

    for (var i = 0; i < x.length; i++) {
        if (x[i] == " ") { // x[i] !== " "
            outputString += "";
        } else {
            outputString += x[i];
        }
    }
    return outputString;
}

//
function noSpace(x) {
    return x.replace(/\s/g, '');
}

//
function noSpace(x) {
    return x.split(' ').join('')
}

//
const noSpace = x => x.replace(/ /g, "");

//16	https://www.codewars.com/kata/string-ends-with
// String ends with?
//В JavaScript есть 3 метода для получения подстроки: substring, substr и slice.
function solution(str, ending) {
    if (ending == "") return true;
    return (str.slice(-ending.length) == ending);
}

//
function solution(str, ending) {
    return str.endsWith(ending);
}

//
const solution = (str, ending) => str.endsWith(ending);

//17	https://www.codewars.com/kata/simple-multiplication
// Simple multiplication

function simpleMultiplication(number) {
    if (number % 2 == 0) z = number * 8;
    else {
        z = number * 9
    }
    return z;
}

//
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

//18	https://www.codewars.com/kata/string-repeat
// String repeat
function repeatStr(n, s) {
    outputString = "";
    for (var i = 0; i < n; i++) {
        outputString += s;
    }
    return outputString;
}

//19	https://www.codewars.com/kata/students-final-grade
// Student's Final Grade
function finalGrade(exam, projects) {
    grade = 0;
    if ((exam > 50) && (projects >= 2)) grade = 75;
    if ((exam > 75) && (projects >= 5)) grade = 90;
    if ((exam > 90) || (projects > 10)) grade = 100;

    return grade;
}

//
finalGrade = (exam, projects) => {
    switch (true) {
        case (exam > 90 || projects > 10):
            return 100
            break;
        case (exam > 75 && projects >= 5):
            return 90;
            break;
        case (exam > 50 && projects >= 2):
            return 75
            break;
        case (exam <= 55 || projects <= 2):
            return 0;
            break;

    }
}

//20	https://www.codewars.com/kata/switch-it-up
// Switch it Up!
function switchItUp(number) {
    switch (number) {
        case 0:
            return ("Zero");
            break;
        case 1:
            return ("One");
            break;
        case 2:
            return ("Two");
            break;
        case 3:
            return ("Three");
            break;
        case 4:
            return ("Four");
            break;
        case 5:
            return ("Five");
            break;
        case 6:
            return ("Six");
            break;
        case 7:
            return ("Seven");
            break;
        case 8:
            return ("Eight");
            break;
        case 9:
            return ("Nine");
            break;
    }
}

//21	https://www.codewars.com/kata/thinkful-logic-drills-traffic-light
// Thinkful - Logic Drills: Traffic light
function updateLight(current) {
    switch (current) {
        case "green":
            return "yellow";
            break;
        case "yellow":
            return "red";
            break;
        case "red":
            return "green";
            break;
    }
}

//22	https://www.codewars.com/kata/third-angle-of-a-triangle
// Third Angle of a Triangle
function otherAngle(a, b) {
    return (180 - a - b);
}

//23	https://www.codewars.com/kata/transportation-on-vacation
// Transportation on vacation
function rentalCarCost(d) {
    dayCost = 40;
    if (d >= 7) return (d * dayCost - 50);
    if (d >= 3) return (d * dayCost - 20);
    return d * dayCost;
}
//
function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}

//24	https://www.codewars.com/kata/type-of-sum
// Type of sum
function typeOfSum(a, b) {
    return typeof(a + b);
}
//
const typeOfSum = (a, b) => typeof(a + b);

//25	https://www.codewars.com/kata/will-you-make-it
// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= (fuelLeft * mpg);
};
