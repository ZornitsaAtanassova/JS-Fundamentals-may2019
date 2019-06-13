function multiplicationTable (n) {
    //You will receive a number as an input from the console. Print the 10 times table for this number. Printing format: {number} X {times} = {product}

    for (let row = 1; row <= 10; row++) {
        let product = n * row;
        console.log(`${n} X ${row} = ${product}`);
    }
}

multiplicationTable(5);
multiplicationTable(2);
