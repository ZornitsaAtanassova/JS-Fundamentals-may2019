function firstAndLastKNumber(input) {
    // Write a function that prints the first k and the last k elements from an array of numbers. The input comes as array of number elements. The first element represents the number k, all other elements are from the array that needs to be processed. The output is printed on the console on two lines. On the first line print the first k elements, separated by space. On the second line print the last k elements, separated by space.
    // Use slice() to split the array into two parts

    // 0 Program code recording. It takes: Memory: 11.75 MB / Time: 0.328 s
    /* let kElement = input.shift();
    // console.log(kElement, input);
    let slicedFirstKElements = input.slice(0, kElement);
    let slicedSecondKElements = input.slice(input.length-kElement, input.length);
    console.log(slicedFirstKElements.join(' '));
    console.log(slicedSecondKElements.join(' ')); */

    // 1 Shortend program code recording. With chaining methods! It takes: Memory: 11.82 MB / Time: 0.265 s
    let k = input.shift();
    let slicedFirstKElements = input.slice(0, k).join(' ');
    let slicedSecondKElements = input.slice(input.length-k, input.length).join(' ');
    console.log(slicedFirstKElements);
    console.log(slicedSecondKElements);

    // 2 More shortend program code recording. With chaining methods, without new variable declaring! It takes: Memory: 11.77 MB / Time: 0.265 s
    /* let k = input.shift();
    console.log(input.slice(0, k).join(' '));
    console.log(input.slice(input.length-k, input.length).join(' ')); */
}

firstAndLastKNumber([2, 7, 8, 9]);  // 7 8   8 9
console.log(`------------------------------`);
firstAndLastKNumber([3, 6, 7, 8, 9]);  // 6 7 8   7 8 9
