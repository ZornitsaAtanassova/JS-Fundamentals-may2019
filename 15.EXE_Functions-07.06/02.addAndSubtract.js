function addAndSubtract(firstNum, secondNum, thirdNum) {
    // You will receive three integer numbers. Write a function sum() to get the sum of the first two integers and subtract() function that subtracts the third integer from the result.

    // 1 way - with ARROW function
/*     let sum = (a, b) => a + b;
    let subtract = (sumResult, c) => sumResult - c;

    let sumResult = sum(firstNum, secondNum);
    console.log(subtract(sumResult, thirdNum)); */

    // 2 way - with HOISTING function
    function sum(a, b) {
        return a + b;
    }

    function subtract(sumResult, c) {
        return sumResult - c;
    }

    let sumResult = sum(firstNum, secondNum);
    let subtractResult = subtract(sumResult, thirdNum);
    console.log(subtractResult);
}

addAndSubtract(23, 6, 10);  // 19
addAndSubtract(1, 17, 30);  // -12
addAndSubtract(42, 58, 100);  // 0
