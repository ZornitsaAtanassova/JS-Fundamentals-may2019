function calculator(firstOperand, operatorArithmetic, secondOperand) {
    //Write a function that receives 3 parameters: a number, an operator (string) and another number. Print the result of the calculation on the console formatted to the 2nd decimal point
    //See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators OR https://www.w3schools.com/js/js_operators.asp

     /*let str = firstOperand + operatorArithmetic + secondOperand; //it's just concatenation!
    console.log(str);*/
    
    //1)Define result variable
    //2)Switch the string and convert in the most popular operators - Arithmetic operators
    //3)Complete the operation
    //4)Use default for err masage
    //5)Print result to 2nd decimal point

    let result = 0;

    switch (operatorArithmetic) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
        default:
            console.log('Unsupported operator!');
            break;
    }

    console.log(result.toFixed(2));
}

calculator(5, '+', 10);   //15.00
calculator(25.5, '-', 3);   //22.50
