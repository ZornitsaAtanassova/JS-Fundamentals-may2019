function maxSequenceOfEqualEl(arr) {
    let indexOfBiggestSeq = -1;
    let maxSeqLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];
        let currentSeqLength = 1;
        
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];

            if (currentEl !== nextEl) {
                break;
            }

            currentSeqLength++;
        }

        if (currentSeqLength > maxSeqLength) {
            maxSeqLength = currentSeqLength;
            indexOfBiggestSeq = i;
        }
    }

    let element = arr[indexOfBiggestSeq];
    console.log(`${element} `.repeat(maxSeqLength).trim());
    //console.log(indexOfBiggestSeq);
    //console.log(maxSeqLength);
}

maxSequenceOfEqualEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);     // 222
maxSequenceOfEqualEl([1, 1, 1, 2, 3, 1, 3, 3]);     // 111
maxSequenceOfEqualEl([4, 4, 4, 4]);     // 4444
maxSequenceOfEqualEl([0, 1, 1, 5, 2, 2, 6, 3, 3]);     // 11
