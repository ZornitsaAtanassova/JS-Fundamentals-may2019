function smallestNumber(firstNum, secondNum, thirdNum) {
    // Write a function which receives three integer numbers to print the smallest. Use appropriate name for the function.

    // 1 way - with math. methods
    //let resultMinNum = Math.min(firstNum, secondNum, thirdNum);

    // 2 way - with logic
    let resultMinNum = firstNum;
    if (resultMinNum > secondNum) {
        resultMinNum = secondNum;
    }
    if (resultMinNum > thirdNum) {
        resultMinNum = thirdNum;
    }

    // 3 way - another logic
    if (firstNum < secondNum && firstNum < thirdNum) {
        resultMinNum = firstNum;
    }
    if (secondNum < firstNum && secondNum < thirdNum) {
        resultMinNum = secondNum;
    }
    if (thirdNum < firstNum && thirdNum < secondNum) {
        resultMinNum = thirdNum;
    }

    console.log(resultMinNum);
}

smallestNumber(2, 5, 3);   // 2
smallestNumber(600, 342, 123);  // 123
smallestNumber(25, 21, 4);  // 4
