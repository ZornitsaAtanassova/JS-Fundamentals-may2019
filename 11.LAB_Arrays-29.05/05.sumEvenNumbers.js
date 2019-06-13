function sumEvenNumbers(inputArr) {
    // Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.

    for (let i = 0; i <inputArr.length; i++) {
        inputArr[i] = Number(inputArr[i]);
    }
    // console.log(inputArr);

    let sum = 0;
    for (let element of inputArr) {
        if (element % 2 === 0) {
            sum += element;
        }
    }

    console.log(sum);   
}

sumEvenNumbers(['1','2','3','4','5','6']);   // 12
sumEvenNumbers(['3','5','7','9']);   // 0
sumEvenNumbers(['2','4','6','8','10']);   // 30
