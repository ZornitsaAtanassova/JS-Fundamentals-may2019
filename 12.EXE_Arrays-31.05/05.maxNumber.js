function maxNumber(inputArr) {
    // Write a function to find all the top integers in an array. A top integer is an integer which is bigger than all the elements to its right. Print all top integers on the console, separated by single space.

    let topIntegers = [];

    for (let i = 0; i < inputArr.length; i++) {
        let firstEl = inputArr[i];
        let isTopInteger = true;

        for (let j = i + 1; j < inputArr.length; j++) {
            let nextEl = inputArr[j];

            if (firstEl <= nextEl) {
                isTopInteger = false;
                break;
            }
        }

        if (isTopInteger) {
            topIntegers.push(firstEl);
        }
    }

    console.log(topIntegers.join(' '));



/*     let topIntegers = [];

    for (let i = 0; i < inputArr.length; i += 2) {
        if (inputArr[i] >= inputArr[i + 1]) {
            topIntegers.push(inputArr[i]);
        }
        if (inputArr[i] < inputArr[i + 1]) {
            topIntegers.push(inputArr[i + 1]);
        }
    }

    console.log(topIntegers.join(' ')); */
}

maxNumber([1, 4, 3, 2]);    // 4 3 2
maxNumber([14, 24, 3, 19, 15, 17]);    // 24 19 17
maxNumber([41, 41, 34, 20]);    // 41 34 20
maxNumber([27, 19, 42, 2, 13, 45, 48]);    // 48