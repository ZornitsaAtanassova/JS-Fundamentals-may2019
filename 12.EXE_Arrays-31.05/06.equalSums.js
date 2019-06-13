function equalSums(arr) {
    let indexOfEl = -1;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }

        if (rightSum === leftSum) {
            indexOfEl = i;
        }
    }

    if (indexOfEl !== -1) {
        console.log(indexOfEl);
    } else {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);    // 2
equalSums([1, 2]);    // no
equalSums([1]);    // 0
equalSums([1, 2, 3]);    // no
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);    // 3