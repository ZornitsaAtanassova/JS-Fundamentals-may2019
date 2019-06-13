function sumFirstAndLastArrayElements(arrStr) {
    // Write a function that receives an array of strings and prints the sum of first and last element in that array.

    // 1 way - with assignment operators
    let sum = Number(arrStr[0]) + Number(arrStr[arrStr.length - 1]);
    console.log(sum);

/*     // 2 way - with methods
    let first = Number(arrStr.shift());
    let second = Number(arrStr.pop());
    console.log(first + second); */
}

sumFirstAndLastArrayElements(['20', '30', '40']);   // 60
sumFirstAndLastArrayElements(['10', '17', '22', '33']);   // 43
sumFirstAndLastArrayElements(['11', '58', '69']);   // 80
