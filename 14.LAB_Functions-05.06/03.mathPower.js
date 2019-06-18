function power(num, base) {
    // Write a function that calculates and returns the value of a number raised to a given power
    
    // 1 way - with math.pow(); function
    // let result = Math.pow(num, base);

    // 2 way - with JS/Python operator for power: **
    // let result = num ** base;

    //3 way - with for loop
    let result = 1;

    for (let i = 0; i < base; i++) {
        result *= num;
    }

    return result;
}

console.log(power(2, 8));    // 256
console.log(power(3, 4));    // 81
