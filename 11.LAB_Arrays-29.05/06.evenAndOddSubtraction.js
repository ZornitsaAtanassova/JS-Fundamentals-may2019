function evenAndOddSubtraction(inputArr) {
    // Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

    let sumEven = 0;
    let sumOdd = 0;

    for (let element of inputArr) {
        if (element % 2 === 0) {
            sumEven += element;
        } else {
            sumOdd += element;
        }
    }

    console.log(sumEven - sumOdd);
}

evenAndOddSubtraction([1,2,3,4,5,6]);   // 3
evenAndOddSubtraction([3,5,7,9]);   // -24
evenAndOddSubtraction([2,4,6,8,10]);   // 30
