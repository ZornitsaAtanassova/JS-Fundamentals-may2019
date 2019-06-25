function distinctArray(input) {
    // You will be given an array of integer numbers on the first line of the input (space-separated). Remove all repeating elements from the array. Print the result elements separated by single space.

    // 1 solve:
    /* let distinctArr = [];
    for (let i = 0; i < input.length; i++) {
        let indexOfEl = input.indexOf(input[i]);

        if (i === indexOfEl) {
            distinctArr.push(input[i]);
        }
    } */

    // 2 solve:
    let distinctArr = input.filter((num, i) => input.indexOf(num) === i);

    console.log(distinctArr.join(' '));
}

distinctArray([1, 2, 3, 4]);    // 1 2 3 4
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);    // 7 8 9 2 3 4 1
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);    // 20 8 12 13 4 5
