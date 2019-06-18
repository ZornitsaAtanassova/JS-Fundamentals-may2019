function nXmMatrix(n) {
    // Write a function that receives a single integer number n and prints nxn matrix with that number.

    // Solves:
    // 1.Nested 2 for loops - inside for = function
    // 2.Method ".repeate();"
    // 3.One for loop + ".repeate();"

    // 1 solve:
    let output = '';
    for (let i = 0; i < n; i++) {
        // console.log(n);
        for (let j = 0; j < n; j++) {
            output += n + ' ';
        }
        console.log(output);
    }
    // console.log(output);
}

nXmMatrix(3);
/* console.log(`-------------------------`);
nXmMatrix(7);
console.log(`-------------------------`);
nXmMatrix(2); */
