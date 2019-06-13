function reverseAnArrayOfNumbers(nFirstsElements, inputArr) {
    // Write a program which receives a number n and an array of elements. Your task is to create a new array with n numbers, reverse it and print its elements on a single line, space separated.

    // 1 way. It is not correct according to the condition of the task!
    // 1)Define string variable for single inline print reversed array's elements
    // 2)Back loop.Iterates array from set limit to index[0] with decrementation
    // 3)Heep reversed elements in variable and print

/*     let reversedArrayElements = '';
    for (let i = nFirstsElements - 1; i >= 0 ; i--) {
        //console.log(inputArr[i]);
        reversedArrayElements += inputArr[i] + ' ';
    }

    console.log(reversedArrayElements); */

    // 2 way. It is according to task - creating a new array!
    // 1)Define new array
    // 2)Iterates old input array to heep new array with firsts 'n' elements from old input array. In the same order. Use methods for ADD elements in array!
    // 3)Define string vaiable for print in reverse order
    // 4)Back loop new array with decrenemtation from length-1 to index[0] or from length to index[1]
    // 5)Heep reversed elements in variable and print

    let newArr = [];
    for (let i = 0; i < nFirstsElements; i++) {
        // console.log(inputArr[i]);
        newArr.push(inputArr[i]); // newArr[i] = inputArr[i]; It's same way for full up in the same order!
        //newArr.unshift(inputArr[i]); It full up in reverse order
    }

    let output = '';
    for (let j = newArr.length - 1; j >= 0; j--) {
        output += newArr[j] + ' ';
    }

    console.log(output);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);   // 30 20 10
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);   // 30 20 10
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);   // 30 20 10
