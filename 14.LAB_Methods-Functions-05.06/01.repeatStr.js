function repeatStr(str, countRepeat) {
    // Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).

    let newStr = '';
    // 1 way:
    // newStr = str.repeat(countRepeat);
    // 2 way:
    for (let i = 0; i < countRepeat; i++) {
        newStr += str;
    }
    return newStr;
}

console.log(repeatStr('abc', 3));    //abcabcabc
console.log(repeatStr('String', 2));     //StringString
