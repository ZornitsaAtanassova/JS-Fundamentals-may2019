function lastStop(input) {
    let paintingsNumbers = input.shift()
                                .split(' ');
    
    for (let line = 0; line < input.length; line++) {
        let instruction = input[line].split(' ');
        //console.log(instruction);
        
        if (instruction[0] === 'Change') {
            let indexOfGivenElement = paintingsNumbers.indexOf(instruction[1]);
            // console.log(indexOfGivenElement);
            while (indexOfGivenElement !== -1) {
                paintingsNumbers.splice(indexOfGivenElement, 1, instruction[2]);
                indexOfGivenElement = paintingsNumbers.indexOf(instruction[1]);
            }
        }

        if (instruction[0] === 'Hide') {
            let indexOfGivenElement = paintingsNumbers.indexOf(instruction[1]);
            // console.log(indexOfGivenElement);
            while (indexOfGivenElement !== -1) {
                paintingsNumbers.splice(indexOfGivenElement, 1);
                indexOfGivenElement = paintingsNumbers.indexOf(instruction[1]);
            }
        }

        if (instruction[0] === 'Switch') {
            let indexOfFirst = paintingsNumbers.indexOf(instruction[1]);
            let indexOfSecond = paintingsNumbers.indexOf(instruction[2]);
            // debugger;
            // console.log(indexOfFirst, indexOfSecond);
            let tmp = paintingsNumbers[indexOfFirst];
            paintingsNumbers[indexOfFirst] = paintingsNumbers[indexOfSecond];
            paintingsNumbers[indexOfSecond] = tmp;        
        }

        if (instruction[0] === 'Insert') {
            if (paintingsNumbers[Number(instruction[1])]) {
                paintingsNumbers.splice(Number(instruction[1])+1, 0, instruction[2]);
            }
        }

        if (instruction[0] === 'Reverse') {
            paintingsNumbers.reverse();
        }

        if (instruction[0] === 'END') {
            break;
        }
    } 

    console.log(paintingsNumbers.join(' '));
}

lastStop([ '115 115 101 114 73 111 116 75',
            'Insert 5 114',
            'Switch 116 73',
            'Hide 75',
            'Reverse ',
            'Change 73 70',
            'Insert 10 85',
            'END' ]
);     // 70 114 111 116 114 101 115 115
console.log(`--------------------------------`);
lastStop([ '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
            'Insert 5 32',
            'Switch 97 78',
            'Hide 88',
            'Change 120 117',
            'END' ]
);   // 77 117 115 101 101 78 32 97 112 111 108 101 111 110
