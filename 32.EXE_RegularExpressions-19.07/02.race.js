function race(input) {
    // 
    let participants = input.shift().split(', ');
    // console.log(participants);

    let results = [];


    for (let line of input) {
        if (line === 'end of race') {
            break;
        }

        let patternAlphabetical = /[A-Za-z]+/g;
        let patternNumerical = /\d/g;

        let nameMatched = line.match(patternAlphabetical).join('');

    // ********Check including in race list:********
        if (participants.includes(nameMatched)) {
            let kilometers = line.match(patternNumerical).map(Number);
            let distance = 0;

            for (let km of kilometers) {
                distance += km;
            }

            // console.log(nameMatched);
            // console.log(kilometers);
            // console.log(distance);

            let tmpObj = {
                name: nameMatched,
                totalDistance: distance
            };

            let isFound = false;

            for (let i = 0; i < results.length; i++) {
                if (results[i].name === nameMatched) {
                    results[i].totalDistance += distance;
                    isFound= true;
                    break;
                }
            }

            if (isFound === false) {
                results.push(tmpObj);
            }            
        }
    // ********Check including in race list:********
    }
    // console.log(results);

// *=*=*=*=*=*=*=*=*Sorting*=*=*=*=*=*=*=*=*=*=

// console.log(results.sort((a, b) => a.totalDistance < b.totalDistance));
    results.sort((a, b) => a.totalDistance < b.totalDistance);
    console.log(`1st place: ${results[0].name}`);
    console.log(`2nd place: ${results[1].name}`);
    console.log(`3rd place: ${results[2].name}`);
// *=*=*=*=*=*=*=*=*Sorting*=*=*=*=*=*=*=*=*=*=
}

race([ 
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race' 
]);     // 1st place: George 2nd place: Peter 3rd place: Tom
