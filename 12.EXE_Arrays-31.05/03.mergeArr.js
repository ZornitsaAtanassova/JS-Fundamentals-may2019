function mergeArr(firstArr, secondArr) {
    // Write a function which receives two string arrays and merges them into a third array.
    // • If the index of the element is even, add into the third array the sum of both elements at that index
    // • If the index of the element is odd, add the concatenation of both elements at that index
    // As output you should print the resulting third array, each element separated by " - ".

    let newArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(Number(firstArr[i]) + Number(secondArr[i]));
        } else {
            newArr.push(firstArr[i].toString() + secondArr[i].toString());
        }
    }

    console.log(newArr.join(' - '));
}

mergeArr(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);     // 22 - 1522 - 110 - 5636 - 46
mergeArr(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);     // 35 - 12312333 - 10 - 77122 - 48
