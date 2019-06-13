function printAndSum(start, end) {
    //Write a function to display numbers from given start to given end and their sum. The input comes as two number parameters.

    let outputInline = '';  //за натрупване на резултите от итерациите, с цел отпечатване на един ред!
    let sum = 0;

    for (let num = start; num <= end; num++) {
        outputInline += num + ' ';  //`${num} `;
        sum += num; 
    }

    console.log(outputInline);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);     //5 6 7 8 9 10      Sum: 45
printAndSum(0, 26);     //0 1 2 ... 26    Sum: 351
printAndSum(50, 60);     //50 51 52 53 54 55 56 57 58 59 60   Sum: 605
