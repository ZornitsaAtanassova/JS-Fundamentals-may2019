function triangleOfNumbers(n) {
    //Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.

    for (let row = 1; row <= n; row++) {
        let outputInline = '';

        for (let num = 1; num <= row; num++) {
            outputInline += row + ' ';
        }
        
        console.log(outputInline);
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);
