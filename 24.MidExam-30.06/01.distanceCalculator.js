function distanceCalc(input) {
    let steps = Number(input.shift());
    let lengthPerStep = Number(input.shift());
    let distanceInMeters = Number(input.shift());

    let shorterStepLength = lengthPerStep - (lengthPerStep / 100) * 30;
    let shorterStepCount = 0;

    for (let i = 1; i <= steps; i++) {
        // console.log(i);
        if (i % 5 === 0) {
           shorterStepCount++;
        }
    }
    // console.log(shorterStepCount, shorterStepLength);

    let myDistance = ((steps - shorterStepCount) * lengthPerStep) + (shorterStepCount * shorterStepLength);

    let percentage = myDistance / distanceInMeters;

    // console.log(myDistance, distanceInMet);
    console.log(`You travelled ${percentage.toFixed(2)}% of the distance!`);
}

distanceCalc([ '100', '2', '1' ]);    // You travelled 188.00% of the distance!
console.log(`--------------------------------`);
distanceCalc([ '5000', '7.5', '500' ]);     // ou travelled 70.50% of the distance!







/* one = ([steps, stepsLength, targetDistance]) => {

    let cmDistance = ((steps - Math.floor(steps / 5)) * stepsLength + Math.floor(steps / 5) * stepsLength * 0.7) / 100

    console.log(`You travelled ${(cmDistance / targetDistance * 100).toFixed(2)}% of the distance!`)
} */
