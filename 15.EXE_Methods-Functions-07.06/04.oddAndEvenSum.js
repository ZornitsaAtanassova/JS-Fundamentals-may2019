function oddAndEvenSum(num) {
    // You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.

    // 1 way - with for loop and variables
    // 1)Directly convert input number to String. Use ".toString()"
    // 2)Define 2 sum variable
    // 3)Iterate converted input
    // 4)Define local var to convert input to Number again. Use "Number()"
    // 5)Check for Even or Odd (i%2===0)
    // 6)And sum up
    // 7)Print

/*     num = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < num.length; i++) {
        let preConvertNum = Number(num[i]);
        if (preConvertNum % 2 !== 0) {
            oddSum += preConvertNum;
        } else {
            evenSum += preConvertNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`); */

    // 2 way - decomposition of sub tasks
    // 1)Directly convert input number to String. Use ".toString()"
    // 2)Define 2 sum variable
    // 3)Define 2 hoisting functions who return Boolean 
        // 3.1)Check for Even or Odd (i%2===0)
    // 4)Iterate converted input
    // 5)Define local var to convert input to Number again. Use "Number()"
    // 6)Check ????
    // 7)And sum up
    // 7)Print
    num = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < num.length; i++) {
        let preConvertNum = Number(num[i]);

        if (isOdd(preConvertNum)) {
            oddSum += preConvertNum;
        }

        if (isEven(preConvertNum)) {
            evenSum += preConvertNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function isOdd(n) {
        return n % 2 !== 0;
    }

    function isEven(n) {
        return n % 2 === 0;
    }
}

oddAndEvenSum(1000435);    // Odd sum = 9, Even sum = 4
oddAndEvenSum(3495892137259234);    // Odd sum = 54, Even sum = 22
