function bombNumbers(numbers, bombNumAndPower) {
    // Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear. The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and it's power. The output is the sum of the remaining elements in the sequence.

    // 1 solve - Detonations/Removing are performed from right to left. - DJUDGE result: 60/100
    // 1)for loop throught the sequence
    // 2)Check if exists bomb number, even after removing first met
    // 3)Define index of bomb number in the sequence
    // 4)Define index of power/removed item at left side
    // 5)Remove from right side - default order on splice() method
    // 6)Remove from left side
    // 7)Sum up remiaining elements and print 

    /* for (let i = 0; i < sequenceNum.length; i++) {
        if (bombNumAndPower[0] === sequenceNum[i]) {
            let indexOfBombNum = sequenceNum.indexOf(bombNumAndPower[0]);
            let indexOfPowerLeft = indexOfBombNum - bombNumAndPower[1];
            // console.log(indexOfBombNum, indexOfPowerLeft);

            //sequenceNum.splice(indexOfBombNum, bombNumAndPower[1]+1);
            sequenceNum.splice(indexOfPowerLeft, (bombNumAndPower[1]*2)+1);
            // console.log(sequenceNum);
        }
    }

    let sum = 0;
    for (let num of sequenceNum) {
        sum += num;
    }
    console.log(sum); */

    // 2 solve - Detonations/Zeroing(Reset to 0) are performed from left to right. - DJUDGE result: 100/100

    let [bombNum, power] = bombNumAndPower;

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];

        if (currentNum === bombNum) {
            let start = Math.max(0, i - power);
            let end = Math.min(i + power, numbers.length - 1);

            for (let j = start; j <= end; j++) {
                numbers[j] = 0;
            }
        }
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);  // 12
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);  // 5
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);  // 6
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);  // 4
