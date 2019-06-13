function simpleCalculator(firstOperand, secondOperand, operator) {
    // Write a function that receives three parameters and write an arrow function that calculate result depending of operator. Operator can be 'multiply', 'divide', 'add', 'subtract'.

    // 1 way - as one function
/*     let result = 0;

    switch (operator) {
        case 'multiply':
            result = firstOperand * secondOperand;
            break;
        case 'divide':
            result = firstOperand / secondOperand;
            break;
        case 'add':
            result = firstOperand + secondOperand;
            break;
        case 'subtract':
            result = firstOperand - secondOperand;
            break;
    }

    return result; */

    // 2 way - decomposed with arrow function
/*     switch (operator) {
        case 'multiply':
            let multiply = (a, b) => a * b;
            console.log(multiply(a, b));
            break;
        case 'divide':
            let divide = (a, b) => a / b;
            console.log(divide(a, b));
            break;
        case 'add':
            let add = (a, b) => a + b;
            console.log(add(a, b));
            break;
        case 'subtract':
            let subtract = (a, b) => a - b;
            console.log(subtract(a, b));
            break;
    } */

    // 3 way - good practice, but slowly???????
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let result = 0;

    switch (operator) {
        case 'multiply':
            result = multiply(firstOperand, secondOperand);
            break;
        case 'divide':
            result = divide(firstOperand, secondOperand);
            break;
        case 'add':
            result = add(firstOperand, secondOperand);
            break;
        case 'subtract':
            result = subtract(firstOperand, secondOperand);
            break;
    }

    return result;
}

console.log(simpleCalculator(5, 5, 'multiply'));     // 25
console.log(simpleCalculator(40, 8, 'divide'));     // 5
console.log(simpleCalculator(12, 19, 'add'));   // 31
console.log(simpleCalculator(50, 13, 'subtract'));  // 37
