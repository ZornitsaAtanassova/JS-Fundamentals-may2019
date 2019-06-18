function sortArray(arr) {
    // Write a function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result. The input comes as array of number elements. The output is printed on the console, each element on a new line.

    // 1 solve - with for loop + if-else conditional statement
    /* let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i]);
        }

        // ternary operator:
        /* (arr[i] < 0)
            ? newArr.unshift(arr[i])
            : newArr.push(arr[i]); 
    } */

    // 2 solve - with for-of loop + ternary operator for conditional statement
    let newArr = [];
    for (let num of arr) {
        (num < 0)
        ? newArr.unshift(num)
        : newArr.push(num);

        /* if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        } */  
    }

    return console.log(newArr.join('\n'));
}

sortArray([7, -2, 8, 9]);  // -2 7 8 9
console.log(`--------------------------------`);
sortArray([3, -2, 0, -1]);  // -1 -2 3 0
