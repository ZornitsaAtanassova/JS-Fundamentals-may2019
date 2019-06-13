function division(num) {
    //You will be given a number and you have to return whether that number is divisible by the following numbers: 2, 3, 6, 7, and 10. You should always take the bigger division.

    //1)Define divider variable
    //2)Check first bigger one divider (because for example: 30:3=10 and 30:6=5 and 30:10=3)
    //3)Check for error

    let divider = 0;    //{дивайдър -делимо}

    if (num % 10 === 0) {
        divider = 10;
    } else if (num % 7 === 0) {
        divider = 7;
    } else if (num % 6 === 0) {
        divider = 6;
    } else if (num % 3 === 0) {
        divider = 3;
    } else if (num % 2 === 0) {
        divider = 2;
    }

    if (divider !== 0) {
        console.log(`The number is divisible by ${divider}`);
    } else {
        console.log("Not divisible");
    }
}

division(30);   //The number is divisible by 10
division(15);   //The number is divisible by 3
division(12);   //The number is divisible by 6
division(1643);   //Not divisible
