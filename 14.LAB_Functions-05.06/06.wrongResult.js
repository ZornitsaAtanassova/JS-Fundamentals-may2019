function wrongResult(numOne, numTwo, numThree) {
    // You are given a function, that calculate the result of numOne * numTwo * numThree (the product) is negative or positive. Try to do this WITHOUT multiplying the 3 numbers. The input comes as parameters named numOne, numTwo, numThree.

    // 1 way - with multiply and conditional
/*     let resultMultiply = numOne * numTwo * numThree;
    let status = '';
    if (resultMultiply < 0) {
        status = 'Negative';
    } else {
        status = 'Positive';
    }
    return status; */

    // 2 way - only conditional logic over operands
    let result = '';

    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree >= 0) {
        result = 'Positive';
    } else if (numOne >= 0 && numTwo < 0 && numThree < 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo >= 0 && numThree < 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
        result = 'Negative';
    } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
        result = 'Negative';
    }

    return result;
}

console.log(wrongResult(5, 12, -15));  // Negative
console.log(wrongResult(-6, -12, 14));  // Positive
console.log(wrongResult(-1, -2, -3));  // Negative
console.log(wrongResult(-1, 0, 1));  // Positive
