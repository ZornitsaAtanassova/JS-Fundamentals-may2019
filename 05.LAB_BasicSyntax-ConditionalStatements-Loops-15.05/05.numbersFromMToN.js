function numbersFromMToN(m, n) {
    //Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from M to N

    /*//1 way:
     for (let i = m; i >= n; i--) {
        console.log(i);
    } */

    //2 way:
    while (m >= n) {
        console.log(m);
        m--;
    }
}

numbersFromMToN(6, 2);  //6..2
numbersFromMToN(4, 1);  //4..1
