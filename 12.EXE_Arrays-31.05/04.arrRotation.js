function arrRotation(inputArr, numRotations) {
    // Write a function that receives an array and number of rotations you have to perform (first element goes at the end). Print the resulting array elements separated my single space.

    // 1 way - with algorithm
/*     numRotations = numRotations % inputArr.length;  // Optimization avoids "time limit" error!
    //console.log(numRotations);

    while (numRotations > 0) {
        //console.log(numRotations);
        let firstEl = inputArr[0];

        for (let i = 0; i < inputArr.length - 1; i++) {
            inputArr[i] = inputArr[i + 1];
        }

        inputArr[inputArr.length - 1] = firstEl;

        numRotations--;
    }

    console.log(inputArr.join(' ')); */

    // 2 way - may way with cut and add methods
    numRotations = numRotations % inputArr.length;  // Optimization avoids "time limit" error!
    
    for (let i = 0; i < numRotations; i++) {
       let firstEl = inputArr.shift();
       inputArr.push(firstEl);
    }

    console.log(inputArr.join(' '));
}

arrRotation([51, 47, 32, 61, 21], 2);  // 32 61 21 51 47
arrRotation([32, 21, 61, 1], 4);  // 32 21 61 1
arrRotation([2, 4, 15, 31], 5);  // 4 15 31 2
