function integerAndFloat(firstNum, secondNum, thirdNum) {
    // You will receive 3 numbers. Your task is to find their sum and print it to the console with the addition.

    // 1)Define sum variable
    // 2)Check if sum is integer or float -> %

     let sum  = firstNum + secondNum + thirdNum;

   if (sum % 1 === 0) {
       sum += ' - Integer';
        // console.log(`${sum} - Integer`);
    } else {
        sum += ' - Float';
        // console.log(`${sum} - Float`);
    }

    console.log(sum);

    // Another way for conditional statement - ternary operator
    /* sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum); */
}

integerAndFloat(9, 100, 1.1);  //110.1 - Float
integerAndFloat(100, 200, 303);  //603 - Integer
