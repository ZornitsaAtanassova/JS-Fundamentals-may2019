/* function solveOne(firstParam, secondParam) {
    //console.log(firstParam + secondParam);
    return firstParam + secondParam;
}
solveOne(5, 4); */

/* function solveOne(input) {
    let firstInput = input.shift();
    let secondInput = input.shift();
    console.log(firstInput + secondInput);
    return firstParam + secondParam;
}
solveOne([5, 4]); */

/* function solveTwo(param) {
    for (let i = 1; i <= param; i++) {
        console.log(i);
    }

    printNum(10);
    return 'END';
}
solveTwo(5);

function printNum(param) {
    for (let i = 6; i <= param; i++) {
        console.log(i);
    }
}

//console.log(solveTwo()); */

// Declaration******************************** */
// Правило1: функциите са, за да декомпозираме на подпроблеми(подпрограми). Подобрява четимостта на кода! Не влияе на бързината на програмата!
// Правило2: 1 функция да извършва 1 нещо(задача)!!!
// Parameters vs Arguments ???
// Функции от по-висок ред (higher order) са такива, които могат да приемат резултата от друга ф. като параметър, но по-добре преди това той да е присвоен на променлива!
function add(a, b) {
    return a + b;
}
let resultAddFunction = add(2, 2);
console.log(resultAddFunction);
function multiply(c, resultAddFunction) {
    return c * resultAddFunction;
}
console.log(multiply(2,5)); // Не работи???

// Declaration and Invoke
// 1)Function HOISTING declaration
function funcName(parameterOne) {
    // Body of HOISTING function
}

// 2)Function EXPRESSION declaration
// solveFive(); // is not define...
let solveFive = function(param) {
    // Body of EXPRESSION function
    console.log(`Hello ${param}!`);
}
solveFive('Z');

// 3)Function ARROW declaration
// Arrow(Lambda) functions - анонимни ф.
let solveSix = () => {
    // Body of ARROW function
}

//******************************************* */


// Return******************************** */
// Return or/and print into function - от горните правила следва, че отпечатването на конзолата е друга задача и е най-добре във функцията да няма console.log(), а само да върне резултат!
// void -> does not return result

function solveTree() {
    let result = 5 * 5;
    console.log(result);
}
solveTree();

function solveFour() {
    let result = 5 * 5;
    return result;
}
// solveFour();
console.log(solveFour());

//******************************************* */


// Invoke************************************* */
// Invoke -> hoisting
// Function Hoisting - издигане на декларациите (но не и на инициализациите) на променливи, функции или други структури от данни в началото на текущия js документ, скрипт или функция! Прави се от интерпретатора като предпроцесорно действие. Само в JS го има!!!
// Благодарение на издигането на декларациите не функциите, те могат да бъдат извикани навсякъде в кода и колкото пъти искаме!
function printBody() {
    printTop();
    console.log('-'.repeat(15));
    printBottom();
    printTop();
    //printBody();
}
printBody();

function printTop() {
    console.log('^'.repeat(15));
}
function printBottom() {
    console.log('@'.repeat(15));
}

//******************************************* */

// Recursion********************************** */
// RangeError: Maximum call stack size exceeded - (stackoverflow) препълване на стека ~ безкраен цикъл. Там влиза всяко отделно извикване на всички функции.
// Stack - ограничено парче памет за изпълнение на програмата.
// Рекурсия (може и трябва да) спира с някаква логика, например:
function printBody(param) {
    if (param === 2) {
        return;
    }

    printTop();
    console.log('-'.repeat(15));
    printBottom();
    printTop();
    //printBody(param + 1); // Не работи????
}
printBody(2);

function printTop() {
    console.log('^'.repeat(15));
}
function printBottom() {
    console.log('@'.repeat(15));
}

//******************************************* */


// Naming************************************* */
// camelCase variableNaming - is firstCharLowerCaseEachFollowingCharUpperCase
// Множествените числа в имента да се иазбягват!!!
// Имента да са смислени и обвързани със задачаТА на функциата!!!

// Тази функция проверява и ОТПЕЧАТВА резултат
function printGrade(grade) {
    let result = '';
    if (grade >= 2.00 && grade <= 5.50) {
        result = 'Not excellent!';
    } else {
        result = 'Excellent!';
    }

    console.log(result);
}
printGrade(5.58);

// Тази функция проверява и ВРЪЩА резултат
function retrieveGrade(grade) {
    let result = '';
    if (grade >= 2.00 && grade <= 5.50) {
        result = 'Not excellent!';
    } else {
        result = 'Excellent!';
    }

    return result;
}
//retrieveGrade(5.58);
console.log(retrieveGrade(5.58));
//******************************************* */

//Arrow*************************************** */
let arr = [1, 2, 3];
let convertedArr = arr.map((num) => num * 2);
console.log(convertedArr.join(' '));
//******************************************* */