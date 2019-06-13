function equalArr(firstArr, secondArr) {
    // Write a program which receives two string arrays and print on the console whether they are identical or NOT. Arrays are identical if their elements are equal. If the arrays are identical find the sum of the first one and print on the console following message: 'Arrays are identical. Sum: {sum}' If the arrays are NOT identical find the first index where the arrays differ and print on the console following message: 'Arrays are not identical. Found difference at {index} index'.

    /* // 1 way
    let sum = 0;
    
    if (firstArr.length === secondArr.length) {
        for (let i = 0; i < firstArr.length; i++) {
            if (firstArr[i] === secondArr[i]) {
                sum += Number(firstArr[i]);
            } else {
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                return;
            }
        }

        console.log(`Arrays are identical. Sum: ${sum}`);

    } else {
        console.log('Arrays are not identical. Different lengths!');
    } */

    let sum = 0;

    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] === secondArr[i]) {
            sum += Number(firstArr[i]);
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArr(['10','20','30'], ['10','20','30']);   // Arrays are identical. Sum: 60
equalArr(['1','2','3','4','5'], ['1','2','4','4','5']);   // Arrays are not identical. Found difference at 2 index
equalArr(['1'], ['10']);   // Arrays are not identical. Found difference at 0 index
