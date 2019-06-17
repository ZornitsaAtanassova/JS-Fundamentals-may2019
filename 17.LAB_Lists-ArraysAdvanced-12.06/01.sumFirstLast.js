function sumFirstLast(arr) {
    // Write a function that calculates and prints the sum of the first and the last elements in an array. The input comes as array of string elements holding numbers. The output is the return value of your function.

    // 1 solve - by index. Not change array!
    /* let result = Number(arr[0]) + Number(arr[arr.length - 1]);
    console.log(result);
    // console.log(arr);
    // return result; */

    // 2 solve - by array methods for remove at the START and TAIL END - "shift()", "pop()". Changed array, not good!
    let resultWithMethods = Number(arr.shift()) + Number(arr.pop());
    console.log(resultWithMethods);
    // console.log(arr);
    // return resultWithMethods;

    // 3 solve - by array method - "map()". It is functional programming style. Changed array, not good!
    /* arr = arr.map(Number);
    let resultWithMethodMap = arr[0] + arr.pop();
    console.log(resultWithMethodMap);
    // console.log(arr);
    // return resultWithMethodMap; */
}

sumFirstLast(['20', '30', '40']);   // 60
console.log(`--------------------------------`);
sumFirstLast(['5', '10']);  // 15
