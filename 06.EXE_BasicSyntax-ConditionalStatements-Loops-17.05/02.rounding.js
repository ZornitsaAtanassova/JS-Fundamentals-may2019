function rounding(num, percision) {
    //Rounds numbers to specific precision. The input comes as two numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). If a precision is passed, that is more than 15 it should automatically be reduced to 15. Remove trailing zeroes, if any (you can use parseFloat())

    if (percision > 15) {
        percision = 15;
    }

    let roundedNum = parseFloat(num.toFixed(percision));

    console.log(roundedNum);
}

rounding(3.1415926535897932384626433832795, 2)  //3.14
rounding(10.5, 3) //10.5
