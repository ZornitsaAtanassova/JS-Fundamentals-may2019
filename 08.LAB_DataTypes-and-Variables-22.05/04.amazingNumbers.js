function amazingNumbers(num) {
    // Write a function which as input will receive  a number. Check and print if it is amazing or not. An amazing number is one that includes the digit 9 the sum of its digits.Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)

/* 
    // 1 way: with algorithm
    // 1)Convert input Number to String in new variable
    // 2)Define sum variable
    // 3)Iterate String and PreConvert Chars->N and sum up
    // 4)Again convert sum Number to String in new variable
    // 5)Iterate Sum String
    // 6)Chek for ecual === 9 (true)
    // 7)Print and return function or print false

    // let numAsStr = num + ''; // This way not work!
    let numAsStr = num.toString();
    let sum = 0;
    
    for (let i = 0; i < numAsStr.length; i++) {
        // console.log(numAsStr[i])
        sum += Number(numAsStr[i]);
    }
    //console.log(sum);
    
    let sumAsStr = sum.toString();

    for (let j = 0; j < sumAsStr.length; j++) {
        //console.log(sumAsStr[j]);
        if (sumAsStr[j] === '9') {
            console.log(`${num} Amazing? True`);
            return;
        }
    }
    console.log(`${num} Amazing? False`); */

    // 2 way: with method includes()
    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    
    let result = sum.toString().includes('9');
    console.log(result
        ? `${num} Amazing? True`
        : `${num} Amazing? False`);
}

amazingNumbers(1233);   // 1233 Amazing? True
amazingNumbers(999);    // 999 Amazing? False
