function sumOfOddNumber(n) {
    //You will receive a number – n. This number shows how many odd numbers you should print. Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.

    let sum = 0;

    //1 way:
    for (let i = 1; i <= (n + n); i += 2) {
        sum += i;
        console.log(i);
    }

    /*//2 way: 
    for (let i = 1; i <= (n + n); i++) {
        if (i % 2 !== 0) {
            sum += i;
            console.log(i);
        }
    } */

    console.log(`Sum: ${sum}`);
}

sumOfOddNumber(5);  //1 3 5 7 9 Sum: 25
sumOfOddNumber(3);  //1 3 5 Sum: 9
