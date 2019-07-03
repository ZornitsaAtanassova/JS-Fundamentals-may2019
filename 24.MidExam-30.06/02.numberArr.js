function numArr(input) {
    let numbers = input.shift()
                        .split(' ')
                        .map(Number);

    for (let line = 0; line < input.length; line++) {
        let command = input[line].split(' ');
        // console.log(command);
        
        if (command[0] === 'Switch') {
            let index = Number(command[1]);
            // console.log(index);
            if (index >= 0 && index <= numbers.length) {
                numbers.splice(index, 1, numbers[index] * (-1));
            }
        }

        if (command[0] === 'Change') {
            if (command[1] >= 0 && command[1] < numbers.length -1) {
                numbers.splice(Number(command[1]), 1, Number(command[2]));
            }
        }

        if (command[0] === 'Sum') {
            if (command[1] === 'Negative') {
                let neg = numbers.filter(function(x) {return x < 0});
                let sumNeg = 0;

                for (let i of neg) {
                    sumNeg += i;
                }
                console.log(sumNeg);
            }

            if (command[1] === 'Positive') {
                let pos = numbers.filter(function(x) {return x >= 0});
                let sumPos = 0;
                
                for (let i of pos) {
                    sumPos += i;
                }
                console.log(sumPos);
            }

            if (command[1] === 'All') {
                let sumAll = 0;
                
                for (let i of numbers) {
                    sumAll += i;
                }
                console.log(sumAll);
            }
        }
    }

    let positiveNum = numbers.filter(function(x) {return x >= 0});
    console.log(positiveNum.join(' '));
}

numArr([ '1 2 3 4 5', 
        'Switch 4', 
        'Change 0 -3', 
        'Sum Negative', 
        'End' ]
);   // -8    2 3 4
console.log(`-----------------------------`);
numArr([ '1 2 3 4 5 4 3 2 1 0',
        'Switch -4',
        'Change 13 0',
        'Switch 0',
        'Sum All',
        'End' ]
);   // 23    2 3 4 5 4 3 2 1 0
