function iselOfTTRace(input) {
    for (let line of input) {
        // First VALIDATION - with RegEx
        let pattern = /([#$%*&])([A-Za-z]+)\1=(\d+)!!([\w\W]+$)/g;

        let match = pattern.exec(line);
        // console.log(match);
        if (match === null) {
            console.log(`Nothing found!`);
        }

        while (match !== null) {
            // console.log(match);
            // Second VALIDATION
            let lengthGHC = Number(match[3]);
            let encryptGHC = match[4];
            let lengthEncryptGHC = encryptGHC.length;
            // console.log(lengthGHC);

            if (lengthGHC === lengthEncryptGHC) {
                let nameOfRacer = match[2];
                let geohashcode = '';

                for (let i = 0; i < lengthEncryptGHC; i++) {
                    let ascii = encryptGHC.charCodeAt(i);
                    ascii += lengthEncryptGHC;
                    // console.log(ascii);
                    
                    geohashcode += String.fromCharCode(ascii);
                }

                console.log(`Coordinates found! ${nameOfRacer} -> ${geohashcode}`);

                return;
            } else {
                console.log(`Nothing found!`);
            }
            
            match = pattern.exec(line);
        }
    }    
}

iselOfTTRace([ '%GiacomoAgostini%=7!!hbqw',
        '&GeoffDuke*=6!!vjh]zi',
        'JoeyDunlop=10!!lkd,rwazdr',
        'Mike??Hailwood=5!![pliu',
        '#SteveHislop#=16!!df%TU[Tj(h!!TT[S' 
]);     //
console.log(`-------------------------------`);
iselOfTTRace([ 'Ian6Hutchinson=7!!\\(58ycb4',
        '#MikeHailwood#!!\'gfzxgu6768=11',
        'slop%16!!plkdek/.8x11ddkc',
        '$Steve$=9Hhffjh',
        '*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
        'RichardQ^uayle=16!!fr5de5kd' 
]);    //
