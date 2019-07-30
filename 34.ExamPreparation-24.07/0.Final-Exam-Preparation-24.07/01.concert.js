function manageConcert(arr) {
    let addMembers = {};
    let playTime = {};
    let totalTime = 0;
    let bandNameToPRint = arr.pop();
 
    for (let i = 0; i < arr.length; i++) {
        let currentLine = arr[i];
        if (currentLine === 'start of concert') {
            console.log(`Total time: ${totalTime}`);
 
            let sortedByTime = Object.entries(playTime)
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
 
            for (let band of sortedByTime) {
                let [bandName, time] = band;
 
                console.log(`${bandName} -> ${time}`);
            }
 
            console.log(bandNameToPRint);
 
            let allMembers = addMembers[bandNameToPRint];
 
            for (let mem of allMembers) {
                console.log(`=> ${mem}`);
            }
 
 
        } else {
            let [command, group, values] = currentLine.split('; ');
 
            if (command === 'Play') {
                let time = Number(values);
 
                if (!playTime.hasOwnProperty(group)) {
                    playTime[group] = 0;
                }
                playTime[group] += time;
                totalTime += time;
            } else if (command === 'Add') {
                let members = values.split(', ');
 
                if (!addMembers.hasOwnProperty(group)) {
                    addMembers[group] = [];
                }
 
 
                for (let member of members) {
 
                    if (!addMembers[group].includes(member)) {
                        addMembers[group].push(member);
                    }
                }
            }
        }
    }
}

manageConcert([ 'Play; The Beatles; 2584',
'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
'Play; Eagles; 1869',
'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
'Play; The Rolling Stones; 4239',
'start of concert',
'The Rolling Stones' 
]);
console.log(`---------------------------`);
manageConcert([ 'Add; The Beatles; John Lennon, Paul McCartney',
'Add; The Beatles; Paul McCartney, George Harrison',
'Add; The Beatles; George Harrison, Ringo Starr',
'Play; The Beatles; 3698',
'Play; The Beatles; 3828',
'start of concert',
'The Beatles' 
]);
