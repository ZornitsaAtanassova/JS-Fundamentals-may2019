function concert(input) {
    // TO DO:
    // 0)Iterate trougth input
        // 1)Check for "stop" command
        // 2)Receive input in a variable - command
        // 3)First split. Used string method split()
        // 4)Switch command "Add":
            // 4.1)Second split
            // 4.2)

    // 2)Decode "extra" emoji ASCII to Char
        // 2.1)Used string method split() to split emoji code by separator in array
        // 2.2)Used array method map() to convert to number
        // 2.3)Iterate trought array to decode by for loop
        // 2.3)Used String method fromCharCode()
    // 3)Regular Expression Pattern - with groups and lookaheads!!!
        // 3.1)Validation allowed
        // 3.2)Emoji for print
        // 3.2)Emoji for calculation
    // 4)Fill the arrays (print and calc) used while loop
        // 4.1)Define 2 arrays
        // 4.2)Used RegExr method exec() to match
        // 4.3)Iterate until null
        // 4.4)Used array method push() to fill arrays
    // 5)Calculate(Sum) power of ONE emoji
        // 5.1)Iterate One Emoji
        // 5.2)Used string method charCodeAt()
    // 6)Call function Calculate
        // 6.1)Define variable for total sum
        // 6.2)Iterate trougth all emojies
    // 7)Check for "extra" emoji and multiply the total emoji power by 2
    
    // 8)Print
        // Total Time
        // Sort array of bands

    // let membersArr = [];
    let band = input.pop();
    let totalTime = 0;
    let bandsTime = {};
    let bandsMembers = {};

    for (let line of input) {
        if (line === 'start of concert') {
            break;
        }
        // console.log(line);

        let command = line.split('; ');
        // console.log(command);

        switch (command[0]) {
            case 'Add':
                let bandName = command[1];
                let members = command[2].split(', ');
                // console.log(members);

                if (bandsMembers.hasOwnProperty(bandName)) {
                    members.forEach(element => {
                        if (!bandsMembers[bandName].includes(element)) {
                            bandsMembers[bandName].push(element);
                        }
                    });
                } else {
                    bandsMembers[bandName] = members;
                }                
                break;
            case 'Play':
                    let bandNameTime = command[1];
                    let time = Number(command[2]);
    
                    if (bandsTime.hasOwnProperty(bandNameTime)) {
                        bandsTime[bandNameTime] += time;
                    } else {
                        bandsTime[bandNameTime] = time;
                    } 
                break;
        }
    }

    
    let couples = Object.entries(bandsTime);
    // console.log(Object.entries(bandsTime));
    couples.forEach((element) => {
        totalTime += Number(element[1]);
    });
    
    /* couples = couples.sort((a, b) => {
        if(b[0].localeCompare(a[0])) {
            return 1
        }
        else {
            return -1
        };
    }); */
    couples = couples.sort((a, b) => {
        if (Number(a[1]) < Number(b[1])) {
            return 1
            }
        else {
            return -1
        };
    });

    console.log(`Total time: ${totalTime}`);
    couples.forEach((element) => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
    console.log(band);
    bandsMembers[band].forEach((element) => {
        console.log(`=> ${element}`);
    });
}

concert([ 'Play; The Beatles; 2584',
        'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
        'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
        'Play; Eagles; 1869',
        'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
        'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie  Watts, Ian Stewart',
        'Play; The Rolling Stones; 4239',
        'start of concert',
        'The Rolling Stones'
]);    // 
console.log(`----------------------------------`);
concert([ 'Add; The Beatles; John Lennon, Paul McCartney',
        'Add; The Beatles; Paul McCartney, George Harrison',
        'Add; The Beatles; George Harrison, Ringo Starr',
        'Play; The Beatles; 3698',
        'Play; The Beatles; 3828',
        'start of concert',
        'The Beatles' 
]);   //
