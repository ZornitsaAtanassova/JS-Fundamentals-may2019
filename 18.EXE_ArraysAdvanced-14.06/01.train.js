function train(input) {
    // The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon. 
    // The second element in the array will be the max capacity of each wagon (single number).
    // The rest of the elements will be commands in the following format:
    // • Add {passengers} – add a wagon to the end with the given number of passengers.
    // • {passengers} -  find an existing wagon to fit all the passengers (starting from the first wagon)
    // At the end print the final state of the train (all the wagons separated by a space)

    let wagonStr = input.shift();
    // console.log(wagonStr);
    let wagonArrStr = wagonStr.split(' ');
    // console.log(wagonArrStr);
    // let wagonArrNum = wagonArrStr.map(Number);
    let wagonArrNum = wagonArrStr.map(wagon => Number(wagon));
    // console.log(wagonArrNum);

    // Short code - chaining:
    /* let wagons = input
        .shift()
        .split(' ')
        .map(Number);
    // console.log(wagons); */

    let limitPassengers = Number(input.shift());
    // console.log(limitPassengers);
    for (let i of input) {
        let workArr = i.split(' ');
        
        // console.log(workArr);
        if (workArr[0] === 'Add') {
            wagonArrNum.push(Number(workArr[1]));
        } else {
            let passengersIn = Number(workArr[0]);

            for (let j = 0; j < wagonArrNum.length; j++) {
                if ((wagonArrNum[j] + passengersIn) <= limitPassengers) {
                    wagonArrNum[j] += passengersIn;
                    break;
                }
            }
        }
    }

    console.log(wagonArrNum.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);    // 72 54 21 12 4 75 23 10 0
console.log(`----------------------------`);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);    // 10 10 10 10 10 10 10
