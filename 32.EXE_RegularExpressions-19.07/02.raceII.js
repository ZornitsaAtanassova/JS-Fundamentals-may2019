function race(input) {
// *=*=*=*=*=*=*=*I: Manipulate and Store at object*=*=*=*=*=*=*
    // console.log(input) 
    let participant = input.shift()
                            .split(', ');
    // console.log(participant);
    let results = {};

    input.forEach(line => {
        let patternAlphabetical = /[A-Za-z]/g;
        let patternNumerical = /\d/g;
        // console.log(line.match(patternAlphabetical));
        // console.log(line.match(patternNumerical));
        // debugger;

        let name = line.match(patternAlphabetical)
                        .join('');
        // console.log(name);

        if (participant.includes(name)) {
            let distance = line.match(patternNumerical)
                                .reduce((a, b) => (+a) + (+b), 0);
            // console.log(distance);

            if (!results[name]) {
                results[name] = 0;
            }

            results[name] += distance;
        }       
    });
    // console.log(results);    
// *=*=*=*=*=*=*=*I: Manipulate and Store at object*=*=*=*=*=*=*

// *=*=*=*=*=*=*=*=*=*II: Sorting and Print*=*=*=*=*=*=*=*=*=*=
    Object.keys(results).sort((a, b) => results[b] - results[a])
                        .slice(0, 3)
                        .forEach((participant, i) => {
                            let p = '';
                            switch (i) {
                                case 0:
                                    p = 'st';
                                    break;
                                case 1:
                                    p = 'nd';
                                    break;
                                case 2:
                                    p = 'rd';
                                    break;
                            }

                            console.log(`${i+1}${p} place: ${participant}`);
                        });
// *=*=*=*=*=*=*=*=*=*II: Sorting and Print*=*=*=*=*=*=*=*=*=*=
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
]);     // 1st place: George 2nd place:Peter 3rd place: Tom
    